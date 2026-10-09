import { createFileRoute } from "@tanstack/react-router";
import { AreaCards, Article, CtaBanner, Reviews, Section } from "../components/Sections";
import { juneAxisCities, SITE } from "../lib/site";

const PHONE = SITE.phones.roads;

export const Route = createFileRoute("/30jun")({
  head: () => ({
    meta: [
      { title: "أفضل ونش إنقاذ سيارات في محور 30 يونيو 24 ساعة | ونش العمار" },
      {
        name: "description",
        content:
          "ونش إنقاذ سريع على طول محور 30 يونيو وجميع المدن التي يمر بها — خدمة 24 ساعة بأحدث الأوناش. اتصل الآن 01206188883.",
      },
      { property: "og:title", content: "ونش إنقاذ محور 30 يونيو | ونش العمار" },
      {
        property: "og:description",
        content: "أسرع ونش إنقاذ في محور 30 يونيو — تغطية كاملة للمحور والمدن المرتبطة به على مدار 24 ساعة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JuneAxis,
});

const reviews = [
  { name: "عميل على الطريق", text: "خدمة سريعة جدًا على الطريق" },
  { name: "سائق ملاكي", text: "وصلوا بسرعة على محور 30 يونيو" },
  { name: "عميل دائم", text: "أفضل ونش تعاملت معاه — تعامل محترم جدًا" },
  { name: "سائق نقل", text: "أنقذوني من عطل مفاجئ — خدمة ممتازة 24 ساعة" },
  { name: "عميل جديد", text: "ناس محترمة وسريعة — تجربة ممتازة جدًا" },
  { name: "عميل", text: "سرعة واستجابة قوية — شكراً ونش العمار" },
];

function JuneAxis() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <span className="inline-block rounded-full border border-primary/50 bg-primary/10 px-4 py-1 text-xs font-bold text-primary">
            خدمة 24 ساعة — <span dir="ltr">{PHONE}</span>
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            أسرع ونش إنقاذ في محور 30 يونيو
          </h1>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
            تغطية كاملة لمحور 30 يونيو والمدن والطرق المرتبطة به، بأحدث الأوناش المجهزة لنقل جميع أنواع
            السيارات بأمان تام.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:+2${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              اتصل الآن <span dir="ltr">{PHONE}</span>
            </a>
          </div>
        </div>
      </section>

      <Section
        title="المدن التي يمر بها محور 30 يونيو"
        subtitle="نغطي جميع النقاط الحيوية على المحور من الإسماعيلية حتى القاهرة لضمان الوصول السريع إليك في أي وقت."
      >
        <AreaCards areas={juneAxisCities} />
      </Section>

      <Article>
        <h2>أفضل ونش إنقاذ سيارات في محور 30 يونيو</h2>
        <p>
          يُعد محور 30 يونيو من أهم الطرق والمحاور الحيوية في مصر، حيث يربط بين العديد من المدن والمحافظات
          ويشهد حركة مرورية كثيفة على مدار اليوم. ومع هذه الكثافة، تزداد احتمالية حدوث أعطال مفاجئة أو
          حوادث، مما يجعل الحاجة إلى خدمة ونش إنقاذ سريعة وموثوقة أمرًا ضروريًا.
        </p>
        <p>
          يقدم ونش العمار خدمات إنقاذ السيارات على طول محور 30 يونيو، سواء كنت بالقرب من مداخل المدن أو في
          المناطق الصحراوية أو على الطرق السريعة المرتبطة به. نحن نغطي جميع النقاط الحيوية على الطريق لضمان
          الوصول السريع إلى العميل في أي وقت.
        </p>
        <p>
          من أهم ما يميز ونش العمار هو سرعة الاستجابة، حيث نصل إليك في أسرع وقت ممكن بفضل انتشارنا وخبرتنا
          في الطرق الرئيسية. سواء تعطلت سيارتك بسبب عطل مفاجئ أو حادث، يمكنك الاعتماد علينا للوصول إليك
          فورًا.
        </p>
        <p>
          نمتلك أحدث أنواع الأوناش المجهزة لنقل جميع أنواع السيارات، سواء كانت سيارات ملاكي أو نقل أو سيارات
          حديثة تحتاج إلى عناية خاصة. نحن نضمن نقل السيارة بأمان تام دون أي أضرار.
        </p>
        <p>
          نعمل على مدار 24 ساعة طوال أيام الأسبوع، مما يعني أنك لن تقلق إذا تعطلت سيارتك في أي وقت، سواء
          صباحًا أو في منتصف الليل. فقط اتصل بنا على الرقم {PHONE} وسنكون في خدمتك فورًا.
        </p>
        <p>
          كما يتميز فريق العمل لدينا بالخبرة والاحترافية، حيث يتم التعامل مع كل حالة بدقة واهتمام لضمان
          أفضل نتيجة. نحن ندرك أن تعطل السيارة قد يسبب ضغطًا كبيرًا، لذلك نعمل على حل المشكلة بسرعة وكفاءة.
        </p>
        <p>
          نقدم أيضًا خدمات إضافية مثل نقل السيارات إلى مراكز الصيانة، وإنقاذ السيارات بعد الحوادث، وسحب
          السيارات المعطلة من الطرق السريعة. كل ذلك بأسعار مناسبة تناسب الجميع.
        </p>
        <p>
          إذا كنت تبحث عن أفضل ونش إنقاذ سيارات في محور 30 يونيو، فإن ونش العمار هو اختيارك الأمثل. لا
          تتردد في الاتصال الآن على {PHONE} للحصول على خدمة فورية وسريعة.
        </p>
        <p>
          هدفنا هو تقديم خدمة موثوقة تجعلنا الخيار الأول لكل من يحتاج إلى إنقاذ سيارات على الطرق السريعة
          والمحاور الرئيسية، لذلك احفظ رقمنا الآن {PHONE} وكن مطمئنًا دائمًا.
        </p>
      </Article>

      <Section title="آراء العملاء">
        <Reviews items={reviews} />
      </Section>

      <CtaBanner phone={PHONE} title="اتصل بنا الآن — ونش العمار محور 30 يونيو" />
    </>
  );
}
