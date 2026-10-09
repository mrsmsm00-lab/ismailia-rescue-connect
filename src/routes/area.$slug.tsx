import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Article, CtaBanner, FeatureGrid, Section } from "../components/Sections";
import { areaBySlug, areas, phoneFor, regionLabel } from "../lib/areas";
import { SITE, tel, wa } from "../lib/site";
import { BreadcrumbStructuredData, homeBreadcrumb } from "../components/BreadcrumbStructuredData";

export const Route = createFileRoute("/area/$slug")({
  loader: ({ params }) => {
    const area = areaBySlug(params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.area;
    if (!a) return { meta: [{ title: "منطقة غير موجودة | ونش العمار" }] };
    const p = phoneFor(a.region);
    const title = `ونش انقاذ ${a.name} 24 ساعة — رقم ${p} | ونش العمار`;
    const desc = `ونش انقاذ سيارات في ${a.name} على مدار 24 ساعة. أسرع وصول وأفضل سعر لسحب ونقل السيارات. اتصل ${p}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `${SITE.domain}/area/${a.slug}/` }],
    };
  },
  component: AreaPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center text-foreground">
      <h1 className="text-3xl font-bold">المنطقة غير موجودة</h1>
      <Link to="/areas" className="mt-6 inline-block text-primary">كل مناطق التغطية</Link>
    </div>
  ),
});

function AreaPage() {
  const { area: a } = Route.useLoaderData();
  const p = phoneFor(a.region);
  const related = areas.filter((x) => x.region === a.region && x.slug !== a.slug);
  return (
    <>
      <BreadcrumbStructuredData items={[
        homeBreadcrumb,
        { name: "مناطق التغطية", url: SITE.domain + "/areas/" },
        { name: "ونش إنقاذ " + a.name, url: SITE.domain + "/area/" + a.slug + "/" }
      ]} />
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-bold text-primary">{regionLabel[a.region]}</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            ونش انقاذ {a.name} — خدمة 24 ساعة
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">{a.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={tel(p)} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">
              <Phone className="h-5 w-5" /> <span dir="ltr">{p}</span>
            </a>
            <a href={wa(`أحتاج ونش إنقاذ في ${a.name}`)} className="rounded-full border border-primary px-6 py-3 font-bold text-primary">
              واتساب فوري
            </a>
          </div>
        </div>
      </section>

      <Article>
        <h2>معلومات عن {a.name}</h2>
        <ul>{a.facts.map((f) => <li key={f}>{f}</li>)}</ul>
        <h2>لماذا تحتاج رقم ونش انقاذ في {a.name}؟</h2>
        <p>
          سواء تعطلت سيارتك داخل {a.name} أو على أحد الطرق المؤدية إليها، فريق {SITE.shortName} جاهز
          للتحرك فورًا بأقرب ونش إليك. نوفر أوناش ملاكي وسطحات هيدروليك لنقل السيارات الملاكي والفان
          والنقل الخفيف والمعدات، مع تأمين كامل للسيارة أثناء السحب.
        </p>
        <h3>خدماتنا في {a.name}</h3>
        <ul>
          <li>سحب السيارات المعطلة ونقلها لأقرب مركز صيانة أو للمنزل.</li>
          <li>إنقاذ السيارات بعد الحوادث وإخراجها من الأماكن الصعبة.</li>
          <li>نقل السيارات الجديدة والمستعملة بين المحافظات.</li>
          <li>سطحات لنقل المعدات الثقيلة والماكينات.</li>
          <li>خدمة ليلية وفي العطلات والأعياد بدون رسوم إضافية مبالغ فيها.</li>
        </ul>
        <h3>أشهر المعالم والمناطق التي نغطيها في {a.name}</h3>
        <ul>{a.landmarks.map((l) => <li key={l}>{l}</li>)}</ul>
        <h3>الطرق الرئيسية</h3>
        <ul>{a.roads.map((r) => <li key={r}>{r}</li>)}</ul>
        <h3>أسئلة شائعة</h3>
        <p><strong>كم يستغرق وصول الونش في {a.name}؟</strong> غالبًا من 15 إلى 40 دقيقة حسب موقعك وحالة الطريق.</p>
        <p><strong>ما رقم ونش انقاذ {a.name}؟</strong> اتصل على {p} أو راسلنا واتساب وأرسل موقعك.</p>
        <p><strong>هل الخدمة متاحة ليلًا؟</strong> نعم، نعمل 24 ساعة طوال أيام الأسبوع.</p>
      </Article>

      <FeatureGrid />

      {related.length > 0 && (
        <Section title={`مناطق قريبة من ${a.name}`}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/area/$slug" params={{ slug: r.slug }} className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 font-bold text-foreground hover:border-primary">
                <MapPin className="h-5 w-5 text-primary" /> ونش انقاذ {r.name}
              </Link>
            ))}
          </div>
        </Section>
      )}
      <CtaBanner phone={p} title={`اطلب ونش انقاذ ${a.name} الآن`} />
    </>
  );
}
