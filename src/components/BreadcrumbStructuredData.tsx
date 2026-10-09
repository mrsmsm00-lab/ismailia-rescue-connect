import { SITE } from "../lib/site";

export function BreadcrumbStructuredData({ items }: { items: { name: string; url?: string }[] }) {
  const graph = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {})
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export const homeBreadcrumb = { name: "الرئيسية", url: SITE.domain + "/" };
