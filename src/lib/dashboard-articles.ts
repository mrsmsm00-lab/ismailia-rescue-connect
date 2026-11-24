import { createServerFn } from "@tanstack/react-start";
import slide1 from "../assets/winch/slide1.jpg";
import { articles as localArticles, type ArticleSection, type LocalArticle } from "./articles";

// Articles published from the admin dashboard (dashboard.ammar.company) are read
// at request time, so a new post shows up without rebuilding the site. The
// articles that ship in the repo keep working if the dashboard is unreachable.

export type DashboardPost = {
  title: string;
  slug: string;
  seo_title?: string;
  keyword?: string;
  excerpt?: string;
  body?: string;
  image?: string;
};

const DEFAULT_API = "https://dashboard.ammar.company";
const CACHE_MS = 60_000;
const TIMEOUT_MS = 4_000;
const DEFAULT_KEYWORD = "ونش إنقاذ الإسماعيلية";

const localSlugs = new Set(localArticles.map((article) => article.slug));

/**
 * Turns the dashboard's plain-text body into the site's article shape.
 * "## " starts a section, "- " is a list item, a blank line ends a paragraph,
 * and the first paragraph before any heading is the intro.
 */
export function postToArticle(post: DashboardPost): LocalArticle {
  const lead: string[] = [];
  const sections: ArticleSection[] = [];
  let current: ArticleSection | null = null;
  let paragraph: string[] = [];

  const flush = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(" ");
    paragraph = [];
    if (current) current.paragraphs.push(text);
    else lead.push(text);
  };

  for (const rawLine of (post.body ?? "").replace(/\r/g, "").split("\n")) {
    const line = rawLine.trim();
    const heading = line.match(/^#{1,6}\s+(.+)$/);
    const bullet = line.match(/^[-*•]\s+(.+)$/);
    if (heading) {
      flush();
      current = { heading: (heading[1] ?? "").trim(), paragraphs: [] };
      sections.push(current);
    } else if (bullet) {
      flush();
      if (!current) {
        current = { heading: "", paragraphs: [] };
        sections.push(current);
      }
      (current.bullets ??= []).push((bullet[1] ?? "").trim());
    } else if (line === "") {
      flush();
    } else {
      paragraph.push(line);
    }
  }
  flush();

  const excerpt = (post.excerpt ?? "").trim();
  const intro = lead.shift() ?? excerpt;
  if (lead.length) sections.unshift({ heading: "", paragraphs: lead });

  return {
    slug: post.slug,
    title: post.title,
    seoTitle: (post.seo_title ?? "").trim() || `${post.title} | ونش العمار`,
    description: excerpt || intro.slice(0, 160),
    keyword: (post.keyword ?? "").trim() || DEFAULT_KEYWORD,
    cover: (post.image ?? "").trim() || slide1,
    intro,
    sections,
  };
}

let cache: { at: number; articles: LocalArticle[] } | null = null;

/** Server-side fetch with a short cache; falls back to the last good copy. */
export async function loadDashboardArticles(): Promise<LocalArticle[]> {
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.articles;
  const base = (typeof process !== "undefined" && process.env["DASHBOARD_API_URL"]) || DEFAULT_API;
  try {
    const response = await fetch(`${base}/api/v1/content?type=post`, {
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) throw new Error(`dashboard API responded ${response.status}`);
    const payload = (await response.json()) as { data?: DashboardPost[] };
    const seen = new Set<string>();
    const articles = (payload.data ?? [])
      .filter((post) => {
        const ok =
          typeof post?.slug === "string" &&
          typeof post?.title === "string" &&
          post.slug.trim() !== "" &&
          !/^page\d+$/.test(post.slug) &&
          !localSlugs.has(post.slug) &&
          !seen.has(post.slug);
        if (ok) seen.add(post.slug);
        return ok;
      })
      .map(postToArticle);
    cache = { at: Date.now(), articles };
    return articles;
  } catch (error) {
    console.error("Could not load dashboard articles:", error);
    // Retry after a short pause instead of on every request.
    cache = { at: Date.now() - CACHE_MS + 15_000, articles: cache?.articles ?? [] };
    return cache.articles;
  }
}

/** Dashboard articles without their body, for listings. */
export const getDashboardSummaries = createServerFn({ method: "GET" }).handler(async () =>
  (await loadDashboardArticles()).map((article) => ({ ...article, intro: "", sections: [] }) as LocalArticle),
);

/** One dashboard article in full, or null when the slug is not a dashboard post. */
export const getDashboardArticle = createServerFn({ method: "GET" })
  .inputValidator((slug: string) => String(slug))
  .handler(async ({ data }) => (await loadDashboardArticles()).find((article) => article.slug === data) ?? null);

/** Newest dashboard posts first, then the articles that ship with the site. */
export function mergeArticles(remote: LocalArticle[]): LocalArticle[] {
  return [...remote, ...localArticles];
}
