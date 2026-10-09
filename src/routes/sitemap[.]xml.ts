import { createFileRoute } from "@tanstack/react-router";
import { areas } from "../lib/areas";
import { SITE } from "../lib/site";

const paths = [
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
  ...areas.map((a) => `/area/${a.slug}/`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = paths
          .map((p) => `  <url><loc>${SITE.domain}${encodeURI(p)}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
