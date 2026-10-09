import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";
import { CtaBanner, Section } from "../components/Sections";

export const Route = createFileRoute("/category/uncategorized")({
  head: () => ({
    meta: [
      { title: "مقالات ونش انقاذ الإسماعيلية | ونش العمار" },
      {
        name: "description",
        content:
          "كل مقالات ونش العمار عن ونش انقاذ سيارات الإسماعيلية والعاشر من رمضان ومحور 30 يونيو — أدلة سريعة لأرقام الاتصال ومناطق التغطية.",
      },
      { property: "og:title", content: "مقالات ونش انقاذ | ونش العمار" },
      { property: "og:description", content: "أحدث مقالات ونش العمار عن إنقاذ وسحب السيارات في الإسماعيلية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CategoryPage,
});

const posts = [
  {
    to: "/ونش-انقاذ/",
    title: "ونش انقاذ — خدمة سحب ونقل سيارات 24 ساعة",
    desc: "متى تحتاج ونش انقاذ، وأنواع السيارات التي نتعامل معها، وكيفية طلب الخدمة.",
  },
  {
    to: "/ونش-إنقاذ-الإسماعيلية-رقم-1-في-اسماعيلي/",
    title: "ونش إنقاذ الإسماعيلية رقم 1 في اسماعيلية",
    desc: "لماذا يُعد ونش العمار الخيار الأول للسائقين في الإسماعيلية.",
  },
  {
    to: "/ونش-إنقاذ-الإسماعيلية-24-ساعة-ونش-العما/",
    title: "ونش إنقاذ الإسماعيلية 24 ساعة ونش العمار",
    desc: "خدمة أوناش تعمل ليلًا ونهارًا طوال أيام الأسبوع والعطلات.",
  },
  {
    to: "/اقرب-ونش-انقاذ-من-موقعى/",
    title: "اقرب ونش انقاذ من موقعى",
    desc: "كيف تصل لأقرب ونش من مكانك على الطرق السريعة وداخل المدن.",
  },
  {
    to: "/ahmed-abou-mousalem-winch/",
    title: "مؤسسة احمد ابو مسلم ونش",
    desc: "تفاصيل خدمة مؤسسة احمد ابو مسلم للونش وسحب السيارات.",
  },
  {
    to: "/30jun/",
    title: "ونش انقاذ 30 يونيو",
    desc: "تغطية كاملة لمحور 30 يونيو والمدن والطرق التي يمر بها.",
  },
  {
    to: "/10oframadan/",
    title: "ونش انقاذ العاشر من رمضان",
    desc: "أوناش داخل العاشر من رمضان والأحياء والمناطق الصناعية.",
  },
];

function CategoryPage() {
  return (
    <>
      <Section
        title="مقالات ونش العمار"
        subtitle="كل ما نشرناه عن ونش انقاذ سيارات الإسماعيلية والعاشر من رمضان ومحور 30 يونيو في مكان واحد — اضغط على المقال لقراءته كاملًا."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <p className="flex items-center gap-2 font-bold text-foreground">
                <FileText className="h-5 w-5 shrink-0 text-primary" />
                {p.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{p.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
                اقرأ المقال <ArrowLeft className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner title="محتاج ونش دلوقتي؟ اتصل بأقرب ونش ليك" />
    </>
  );
}
