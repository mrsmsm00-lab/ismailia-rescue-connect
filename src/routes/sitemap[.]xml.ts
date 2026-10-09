import { createFileRoute } from "@tanstack/react-router";
import { areas } from "../lib/areas";
import { SITE } from "../lib/site";
import { articles } from "../lib/articles";

// Generate this response at request time so the deployed sitemap always reflects
// the current article and area collections.
const staticPaths = [
  "/",
  "/30jun/",
  "/10oframadan/",
  "/areas/",
  "/ahmed-abou-mousalem-winch/",
  "/ونش-إنقاذ-الإسماعيلية-24-ساعة-ونش-العما/",
  "/ونش-انقاذ/",
  "/ونش-إنقاذ-الإسماعيلية-رقم-1-في-اسماعيلي/",
  "/اقرب-ونش-انقاذ-من-موقعى/",
  "/category/uncategorized/",
];

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = [
          ...staticPaths,
          ...areas.map((area) => `/area/${area.slug}/`),
          "/articles/",
          ...Array.from({ length: Math.max(0, Math.ceil(articles.length / 20) - 1) }, (_, index) => `/articles/page${index + 2}/`),
          ...articles.map((article) => `/articles/${article.slug}/`),
        ];

        // Avoid duplicate entries while preserving the original ordering.
        const uniquePaths = [...new Set(paths)];
        const urls = uniquePaths
          .map((path) => {
            const loc = xmlEscape(`${SITE.domain}${encodeURI(path)}`);
            return `  <url><loc>${loc}</loc></url>`;
          })
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            // Do not let browser/CDN caches keep an old URL list after deploy.
            "Cache-Control": "no-store, max-age=0",
          },
        });
      },
    },
  },
});
