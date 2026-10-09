import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { fleetPhotos } from "../lib/gallery";
import { SITE } from "../lib/site";

export const Route = createFileRoute("/fleet/")({
  head: () => ({
    meta: [
      { title: "أسطول ونش العمار بالصور | ونش إنقاذ الإسماعيلية" },
      { name: "description", content: "تصفح صور أسطول ونش العمار لإنقاذ وسحب السيارات في الإسماعيلية. افتح الصور بالحجم الكبير أو انتقل إلى صفحة مستقلة لكل صورة." },
    ],
    links: [{ rel: "canonical", href: SITE.domain + "/fleet/" }],
  }),
  component: FleetPage,
});

function FleetPage() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => current === null ? null : (current + fleetPhotos.length - 1) % fleetPhotos.length);
      if (event.key === "ArrowLeft") setActive((current) => current === null ? null : (current + 1) % fleetPhotos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);
  const photo = active === null ? null : fleetPhotos[active];
  return <main className="mx-auto max-w-6xl px-4 py-12">
    <header className="mx-auto max-w-3xl py-8 text-center">
      <h1 className="text-3xl font-extrabold text-foreground md:text-5xl">أسطول ونش العمار</h1>
      <p className="mt-4 leading-8 text-muted-foreground">تصفح صور الأسطول. اضغط على الصورة لعرضها بالحجم الكبير، أو افتح صفحتها المستقلة للاطلاع على التفاصيل.</p>
    </header>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{fleetPhotos.map((item, index) => <article key={item.slug} className="overflow-hidden rounded-xl border border-border bg-card">
      <button type="button" onClick={() => setActive(index)} aria-label={`تكبير ${item.title}`} className="block w-full"><img src={item.src} alt={item.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform hover:scale-[1.02]" /></button>
      <div className="p-4"><h2 className="font-bold text-foreground">{item.title}</h2><Link to="/gallery/$slug" params={{ slug: item.slug }} className="mt-2 inline-block text-sm font-bold text-primary">صفحة الصورة والتفاصيل ←</Link></div>
    </article>)}</div>
    {photo && <div role="dialog" aria-modal="true" aria-label={photo.title} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setActive(null)}>
      <button type="button" onClick={() => setActive(null)} aria-label="إغلاق العرض" className="absolute right-4 top-4 rounded-full bg-white/15 p-3 text-white"><X /></button>
      <button type="button" onClick={(event) => { event.stopPropagation(); setActive((active! + fleetPhotos.length - 1) % fleetPhotos.length); }} aria-label="الصورة السابقة" className="absolute left-3 rounded-full bg-white/15 p-3 text-white"><ChevronLeft /></button>
      <figure className="max-h-[90vh] max-w-5xl" onClick={(event) => event.stopPropagation()}><img src={photo.src} alt={photo.alt} className="max-h-[78vh] max-w-full object-contain" /><figcaption className="mt-3 text-center text-white"><Link to="/gallery/$slug" params={{ slug: photo.slug }} className="font-bold underline">{photo.title} — عرض الصفحة المستقلة</Link></figcaption></figure>
      <button type="button" onClick={(event) => { event.stopPropagation(); setActive((active! + 1) % fleetPhotos.length); }} aria-label="الصورة التالية" className="absolute right-3 rounded-full bg-white/15 p-3 text-white"><ChevronRight /></button>
    </div>}
  </main>;
}
