import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CtaBanner, Section } from "../components/Sections";
import { areas, regionLabel, type Region } from "../lib/areas";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "مناطق تغطية ونش انقاذ الإسماعيلية والعاشر و30 يونيو | ونش العمار" },
      { name: "description", content: "كل مناطق تغطية ونش العمار: مدن الإسماعيلية، العاشر من رمضان، محور 30 يونيو والطرق الرئيسية — خدمة 24 ساعة." },
      { property: "og:title", content: "مناطق تغطية ونش العمار" },
      { property: "og:description", content: "ونش انقاذ في كل مدن الإسماعيلية والعاشر من رمضان ومحور 30 يونيو." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      {(Object.keys(regionLabel) as Region[]).map((r) => (
        <Section key={r} title={`ونش انقاذ ${regionLabel[r]}`}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.filter((a) => a.region === r).map((a) => (
              <Link key={a.slug} to="/area/$slug" params={{ slug: a.slug }} className="rounded-xl border border-border bg-card p-5 hover:border-primary">
                <p className="flex items-center gap-2 font-bold text-foreground"><MapPin className="h-5 w-5 text-primary" /> {a.name}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{a.intro}</p>
              </Link>
            ))}
          </div>
        </Section>
      ))}
      <CtaBanner title="محتاج ونش دلوقتي؟ اتصل بأقرب ونش ليك" />
    </>
  );
}
