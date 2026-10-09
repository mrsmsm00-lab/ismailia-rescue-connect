import { createFileRoute } from "@tanstack/react-router";
import { AreaCards, Article, CtaBanner } from "../components/Sections";
import { ismailiaAreas, SITE } from "../lib/site";

export const Route = createFileRoute("/ونش-إنقاذ-الإسماعيلية-24-ساعة-ونش-العمار")({
  head: () => ({
    meta: [
      { title: "ونش إنقاذ الإسماعيلية 24 ساعة — مناطق التغطية | ونش العمار" },
      {
        name: "description",
        content: "تغطية ونش العمار الشاملة لجميع مناطق الإسماعيلية: الإسماعيلية الجديدة، فايد، القنطرة شرق وغرب، أبو صوير. خدمة 24 ساعة — 01206188884.",
      },
      { property: "og:title", content: "ونش إنقاذ الإسماعيلية 24 ساعة — مناطق التغطية | ونش العمار" },
      { property: "og:description", content: "جميع مناطق تغطية ونش العمار في محافظة الإسماعيلية على مدار 24 ساعة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoverageAreas,
});

function CoverageAreas() {
  return (
    <>
      <Article>
        <h2>ونش إنقاذ الإسماعيلية 24 ساعة — ونش العمار يغطي كل المناطق</h2>
        <p>
          نحن حولك في كل مكان. تغطي خدمات ونش العمار جميع المناطق الحيوية في محافظة الإسماعيلية، من
          قلب المدينة إلى أطرافها ومن الطرق الساحلية إلى الطرق الصحراوية. أينما تعطلت سيارتك، ستجد
          أقرب ونش إليك جاهزًا للتحرك فورًا على مدار 24 ساعة.
        </p>
      </Article>
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <AreaCards areas={ismailiaAreas} />
      </section>
      <Article>
        <h3>تغطية الطرق السريعة</h3>
        <p>
          بالإضافة إلى المناطق السكنية، نغطي طريق مصر الإسماعيلية الصحراوي، وطريق الإسماعيلية السويس،
          وطريق الإسماعيلية بورسعيد، ومحور 30 يونيو، والطريق الدائري الإقليمي. احفظ رقمنا
          {` ${SITE.phones.main}`} وكن مطمئنًا في أي رحلة.
        </p>
      </Article>
      <CtaBanner title="أينما كنت في الإسماعيلية — نصل إليك" />
    </>
  );
}
