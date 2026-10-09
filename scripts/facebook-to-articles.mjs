import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const graphVersion = process.env.META_GRAPH_VERSION || "v26.0";
const pageId = process.env.META_PAGE_ID;
const pageToken = process.env.META_PAGE_ACCESS_TOKEN;
const openAiKey = process.env.OPENAI_API_KEY;
if (!pageId || !pageToken || !openAiKey) {
  throw new Error("Missing META_PAGE_ID, META_PAGE_ACCESS_TOKEN, or OPENAI_API_KEY GitHub Actions secret.");
}
const root = process.cwd();
const generatedPath = path.join(root, "src/lib/facebook-articles.generated.ts");
const mediaDir = path.join(root, "public/facebook-posts");
await mkdir(mediaDir, { recursive: true });

const existingSource = await readFile(generatedPath, "utf8");
const existingIds = new Set([...existingSource.matchAll(/sourcePostId:\s*["']([^"']+)["']/g)].map(m => m[1]));
// The generated file is a TypeScript data module; parse its exported JSON payload when present.
const payloadMatch = existingSource.match(/export const facebookArticles: FacebookArticle\[\] = (\[.*\]);/s);
let articles = [];
if (payloadMatch) {
  try { articles = JSON.parse(payloadMatch[1]); } catch { articles = []; }
}
for (const item of articles) if (item.sourcePostId) existingIds.add(item.sourcePostId);

async function graph(url) {
  const response = await fetch(url);
  const body = await response.json();
  if (!response.ok || body.error) throw new Error("Meta Graph API request failed: " + (body.error?.message || response.status));
  return body;
}
const query = new URLSearchParams({
  fields: "id,message,created_time,permalink_url,attachments{media_type,media,url,subattachments{media_type,media,url}}",
  limit: "100",
  access_token: pageToken
});
const feed = await graph(`https://graph.facebook.com/${graphVersion}/${pageId}/posts?${query}`);
const posts = (feed.data || []).filter(p => p.id && p.message && p.message.trim().length >= 80 && !existingIds.has(p.id));
if (!posts.length) {
  console.log("No new eligible Facebook posts.");
  process.exit(0);
}

function flattenAttachments(attachments = []) {
  const result = [];
  for (const attachment of attachments) {
    if (attachment.media?.image?.src) result.push({ url: attachment.media.image.src, type: attachment.media_type });
    if (attachment.media?.source && attachment.media_type === "video") result.push({ url: attachment.media.source, type: "video" });
    if (attachment.subattachments?.data) result.push(...flattenAttachments(attachment.subattachments.data));
  }
  return result;
}
async function writeImage(post, media) {
  if (!media?.url || media.type === "video") return null;
  try {
    const response = await fetch(media.url);
    if (!response.ok) return null;
    const type = response.headers.get("content-type") || "";
    const ext = type.includes("png") ? "png" : type.includes("webp") ? "webp" : "jpg";
    const filename = `fb-${post.id.replace(/[^a-zA-Z0-9_-]/g, "-")}-1.${ext}`;
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length > 8 * 1024 * 1024) return null;
    await writeFile(path.join(mediaDir, filename), bytes);
    return `/facebook-posts/${filename}`;
  } catch { return null; }
}
async function createArticle(post, cover) {
  const prompt = {
    role: "system",
    content: "أنت محرر محتوى عربي لموقع ونش العمار في الإسماعيلية. حوّل المنشور إلى مقال مفيد وأمين للمصدر، من دون اختلاق وقائع أو أسعار أو تغطية أو أوقات وصول أو ادعاءات. لا تحول التهاني والإعلانات القصيرة أو النص غير المفيد إلى مقال. اكتب بالعربية المصرية الواضحة. أعد JSON فقط بالشكل: {eligible:boolean,title:string,seoTitle:string,description:string,keyword:string,intro:string,sections:[{heading:string,paragraphs:string[],bullets?:string[]}]}. مقال 3-5 أقسام، كل قسم 1-3 فقرات. لا تكرر نص المنشور حرفيًا بالكامل. لا تذكر معلومات غير موجودة بالمصدر إلا نصائح سلامة عامة دقيقة."
  };
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${openAiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [prompt, { role: "user", content: `حوّل المنشور التالي إلى مقال للموقع. إذا لم يصلح كمقال، اجعل eligible=false.\nتاريخ النشر: ${post.created_time || ""}\nالنص:\n${post.message}` }]
    })
  });
  const result = await response.json();
  if (!response.ok) throw new Error("OpenAI API request failed: " + (result.error?.message || response.status));
  const content = result.choices?.[0]?.message?.content;
  if (!content) return null;
  const article = JSON.parse(content);
  if (!article.eligible || !article.title || !article.intro || !Array.isArray(article.sections) || article.sections.length < 2) return null;
  const slug = `facebook-post-${post.id.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")}`;
  return {
    slug, title: article.title.slice(0, 180), seoTitle: (article.seoTitle || article.title).slice(0, 70),
    description: (article.description || article.intro).slice(0, 160),
    keyword: (article.keyword || "ونش إنقاذ الإسماعيلية").slice(0, 100),
    cover: cover || "/winch-logo.png", intro: article.intro,
    sections: article.sections, sourcePostId: post.id, sourcePostUrl: post.permalink_url || "",
    publishedAt: post.created_time || new Date().toISOString()
  };
}

for (const post of posts.reverse()) {
  try {
    const media = flattenAttachments(post.attachments?.data || [])[0];
    const cover = await writeImage(post, media);
    const article = await createArticle(post, cover);
    if (article) {
      articles.push(article);
      existingIds.add(post.id);
      console.log("Prepared article from Facebook post", post.id);
    } else {
      // Mark reviewed posts as seen only if they were valid candidates; do not repeatedly spend tokens on short/irrelevant posts.
      existingIds.add(post.id);
    }
  } catch (error) {
    console.error("Failed to process post", post.id, error.message);
  }
}
const output = `import type { LocalArticle } from "./articles";\n\nexport type FacebookArticle = LocalArticle & { sourcePostId: string; sourcePostUrl: string; publishedAt: string };\n\n// Updated automatically by the daily Facebook-to-article workflow.\nexport const facebookArticles: FacebookArticle[] = ${JSON.stringify(articles, null, 2)};\n`;
await writeFile(generatedPath, output, "utf8");
console.log(`Saved ${articles.length} generated articles.`);
