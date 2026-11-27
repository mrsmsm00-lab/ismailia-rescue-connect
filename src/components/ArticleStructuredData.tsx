import { SITE } from "../lib/site";

type ArticleStructuredDataProps = {
  title: string;
  description: string;
  slug: string;
  image?: string;
  updatedAt?: string | undefined;
};

export function ArticleStructuredData({ title, description, slug, image, updatedAt }: ArticleStructuredDataProps) {
  const url = SITE.domain + "/articles/" + slug + "/";
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": url + "#article",
        headline: title,
        description,
        inLanguage: "ar-EG",
        ...(updatedAt ? { dateModified: updatedAt } : {}),
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Organization", "@id": SITE.domain + "/#organization", name: SITE.shortName },
        publisher: { "@type": "Organization", "@id": SITE.domain + "/#organization", name: SITE.shortName },
        ...(image ? { image: [image.startsWith("http") ? image : SITE.domain + (image.startsWith("/") ? image : "/" + image)] } : {})
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE.domain + "/" },
          { "@type": "ListItem", position: 2, name: "المقالات", item: SITE.domain + "/articles/" },
          { "@type": "ListItem", position: 3, name: title, item: url }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
