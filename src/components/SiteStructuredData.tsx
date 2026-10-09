import { SITE } from "../lib/site";

const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": SITE.domain + "/#organization",
      name: SITE.shortName,
      url: SITE.domain + "/",
      logo: SITE.domain + "/winch-logo.png",
      telephone: "+201206188884",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+201206188884",
        contactType: "customer service",
        areaServed: "EG",
        availableLanguage: ["Arabic"]
      }
    },
    {
      "@type": "WebSite",
      "@id": SITE.domain + "/#website",
      url: SITE.domain + "/",
      name: SITE.name,
      inLanguage: "ar-EG",
      publisher: { "@id": SITE.domain + "/#organization" }
    },
    {
      "@type": "Service",
      "@id": SITE.domain + "/#vehicle-recovery-service",
      name: "خدمة ونش إنقاذ وسحب السيارات",
      serviceType: "إنقاذ وسحب ونقل السيارات",
      provider: { "@id": SITE.domain + "/#organization" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "الإسماعيلية، مصر" },
        { "@type": "Place", name: "محور 30 يونيو، مصر" },
        { "@type": "City", name: "العاشر من رمضان، مصر" }
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: {
          "@type": "ContactPoint",
          telephone: "+201206188884",
          contactType: "customer service"
        }
      }
    }
  ]
};

export function SiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
    />
  );
}
