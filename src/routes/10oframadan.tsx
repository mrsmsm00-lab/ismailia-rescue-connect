import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Article, CtaBanner, Reviews, Section } from "../components/Sections";
import { ramadanAreas, SITE } from "../lib/site";

const PHONE = SITE.phones.roads;

export const Route = createFileRoute("/10oframadan")({
  head: () => ({
    meta: [
      { title: "أفضل ونش إنقاذ سيارات في العاشر من رمضان 24 ساعة | ونش العمار" },
      {
        name: "description",
        content:
          "ونش إنقاذ سريع في جميع أحياء ومناطق العاشر من رمضان والمناطق الصناعية — خدمة 24 ساعة. اتصل الآن 01206188883.",
      },
      { property: "og:title", content: "ونش إنقاذ العاشر من رمضان | ونش العمار" },
      {
        property: "og:description",
        content: "أسرع ونش إنقاذ في العاشر من رمضان — جميع الأحياء والمناطق الصناعية على مدار 24 ساعة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  links: [{ rel: "canonical", href: SITE.domain + "/10oframadan/" }],
  component: TenthOfRamadan,
});

const reviews = [
  { name: "عميل — الحي الأول", text: "خدمة ممتازة وسريعة جدًا في الحي الأول" },
  { name: "عميل — الحي الثاني", text: "وصلوا في أقل من 20 دقيقة في الحي الثاني" },
  { name: "عميل", text: "أفضل ونش في العاشر من رمضان — تعامل محترم وأسعار ممتازة" },
  { name: "عميل — المنطقة الصناعية", text: "أنقذوني في المنطقة الصناعية بسرعة" },
  { name: "عميل", text: "خدمة 24 ساعة حقيقية مش كلام — ناس محترمة جدًا وأنصح بيهم" },
  { name: "عميل", text: "أفضل تجربة ونش حصلت لي — سرعة واستجابة عالية جدًا" },
];

function TenthOfRamadan() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <span className="inline-block rounded-full border border-primary/50 bg-primary/10 px-4 py-1 text-xs font-bold text-primary">
            خدمة 24 ساعة — <span dir="ltr">{PHONE}</span>
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            أسرع ونش إنقاذ في العاشر من رمضان
          </h1>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
            تغطية شاملة لجميع أحياء مدينة العاشر من رمضان والمناطق الصناعية، بأسطول أوناش حديثة وفريق
            محترف على مدار الساعة.
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
        title="مناطق التغطية داخل العاشر من رمضان"
        subtitle="نغطي جميع الأحياء والمجاورات والمناطق الصناعية بدون استثناء، بالإضافة إلى المدن المجاورة."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ramadanAreas.map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-bold text-foreground">{a}</span>
            </div>
          ))}
        </div>
      </Section>

      <Article>
        <h2>أفضل ونش إنقاذ سيارات في العاشر من رمضان</h2>
        <p>
          تعتبر خدمات إنقاذ السيارات من أهم الخدمات الحيوية التي يحتاجها أي سائق داخل مدينة العاشر من
          رمضان، خاصة مع التوسع الكبير في المدينة ووجود العديد من المناطق الصناعية والسكنية. ومع زيادة عدد
          السيارات، أصبح من الطبيعي أن تحدث أعطال مفاجئة أو حوادث تحتاج إلى تدخل سريع من ونش إنقاذ محترف.
          وهنا يأتي دور ونش العمار الذي يقدم خدمات إنقاذ السيارات بأعلى مستوى من الاحترافية والسرعة داخل
          جميع أنحاء العاشر من رمضان.
        </p>
        <p>
          يغطي ونش العمار جميع مناطق العاشر من رمضان بدون استثناء، بداية من الحي الأول والحي الثاني والحي
          الثالث، وصولاً إلى الحي الرابع والحي الخامس والحي السادس، بالإضافة إلى المناطق الحديثة مثل الحي
          السابع والحي الثامن. كما نقدم خدماتنا في المجاورات المختلفة داخل المدينة، وكذلك المناطق الحيوية
          مثل الأردنية والمناطق السكنية الجديدة.
        </p>
        <p>
          ولا تقتصر خدماتنا على المناطق السكنية فقط، بل تشمل أيضًا جميع المناطق الصناعية مثل المنطقة
          الصناعية الأولى والثانية والثالثة، بالإضافة إلى المناطق الصناعية A1 و A2، حيث تكثر حركة النقل
          الثقيل والسيارات، مما يزيد من احتمالية الأعطال. نحن نضمن الوصول السريع إلى أي موقع داخل هذه
          المناطق في أقل وقت ممكن.
        </p>
        <p>
          أحد أهم ما يميز ونش العمار هو سرعة الاستجابة، حيث نعمل على مدار 24 ساعة يوميًا، بما في ذلك أيام
          العطلات، لنكون متواجدين دائمًا لخدمتك. سواء تعطلت سيارتك في طريق مصر الإسماعيلية الصحراوي أو
          داخل أحد الأحياء، يمكنك الاتصال بنا على الفور على الرقم {PHONE} وسنصل إليك في أسرع وقت.
        </p>
        <p>
          نمتلك أسطولاً من الأوناش الحديثة المجهزة للتعامل مع جميع أنواع السيارات، سواء كانت سيارات ملاكي
          أو سيارات نقل أو سيارات فارهة. كما نحرص على استخدام أحدث وسائل التأمين لضمان نقل السيارة بدون أي
          خدوش أو أضرار.
        </p>
        <p>
          كما يتميز فريق العمل لدينا بالخبرة العالية في التعامل مع مختلف حالات الأعطال والحوادث، حيث يتم
          تدريب الفريق بشكل مستمر لضمان تقديم أفضل خدمة ممكنة. هدفنا هو راحة العميل وتقديم تجربة مميزة
          تجعله يثق بنا دائمًا.
        </p>
        <p>
          نقدم أيضًا خدمات نقل السيارات إلى مراكز الصيانة، وسحب السيارات المعطلة، وإنقاذ السيارات بعد
          الحوادث، بالإضافة إلى المساعدة في الحالات الطارئة على الطرق السريعة. كل ذلك بأسعار تنافسية تناسب
          الجميع.
        </p>
        <p>
          إذا كنت تبحث عن ونش إنقاذ سيارات في العاشر من رمضان يجمع بين السرعة والاحترافية والسعر المناسب،
          فإن ونش العمار هو الخيار الأفضل لك. لا تتردد في الاتصال الآن على الرقم {PHONE} للحصول على خدمة
          فورية أينما كنت داخل المدينة.
        </p>
        <p>
          نحن في ونش العمار نؤمن أن العميل هو أساس النجاح، لذلك نحرص دائمًا على تقديم خدمة ترضي توقعاته
          وتفوقها. احفظ رقمنا الآن {PHONE} لتكون مستعدًا في أي وقت تحتاج فيه إلى المساعدة.
        </p>
      </Article>

      <Section title="آراء العملاء">
        <Reviews items={reviews} />
      </Section>

      <CtaBanner phone={PHONE} title="اتصل بنا الآن — ونش العمار العاشر من رمضان" />
    </>
  );
}
