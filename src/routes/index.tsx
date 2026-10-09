import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSlider } from "../components/HeroSlider";
import { AreaCards, Article, CtaBanner, FeatureGrid, Reviews, Section } from "../components/Sections";
import { ismailiaAreas, mainRoads, SITE } from "../lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ونش إنقاذ الإسماعيلية 24 ساعة – خدمة سحب سيارات سريعة وآمنة | ونش العمار" },
      {
        name: "description",
        content:
          "ونش العمار — أسرع ونش إنقاذ في الإسماعيلية 24 ساعة. سحب ونقل جميع أنواع السيارات في كل مناطق الإسماعيلية والطرق السريعة. اتصل الآن 01206188884.",
      },
      { property: "og:title", content: "ونش إنقاذ الإسماعيلية 24 ساعة | ونش العمار" },
      {
        property: "og:description",
        content: "خدمة سحب ونقل سيارات سريعة وآمنة في جميع مناطق الإسماعيلية على مدار 24 ساعة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  links: [{ rel: "canonical", href: SITE.domain + "/" }],
  component: Index,
});

const reviews = [
  { name: "إسلام إبراهيم", text: "أفضل ونش إنقاذ في الإسماعيلية جربته، السعر كان مناسب جدًا والتعامل محترم، والعربية وصلت من غير أي خدش." },
  { name: "محمد سعيد", text: "كنت واقف على طريق الإسماعيلية الصحراوي العربية عطلت فجأة، كلمتهم وصلوا في أقل من 20 دقيقة، بصراحة خدمة ممتازة وسواق محترم جدًا." },
  { name: "عصام البنا", text: "كنت محتاج ونش الساعة 3 الفجر، ردوا بسرعة وجالي ونش في وقت قياسي، خدمة 24 ساعة بجد مش كلام." },
  { name: "سميه السيد", text: "العربية غرقت في الرمل في فايد، والونش قدر يطلعها بسهولة، واضح إن عندهم خبرة كبيرة." },
];

function Index() {
  return (
    <>
      <HeroSlider />
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center">
        <img src="/winch-logo.png" alt="ونش العمار انقاذ سيارات الاسماعيلية رقم 1" className="w-full max-w-xl drop-shadow-2xl" loading="eager" />
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">ونش العمار — رقم 1 في انقاذ سيارات الإسماعيلية والعاشر من رمضان ومحور 30 يونيو، على مدار 24 ساعة.</p>
      </section>

      <Section
        title="ونش إنقاذ الإسماعيلية 24 ساعة"
        subtitle="إذا كنت تبحث عن خدمة ونش إنقاذ في الإسماعيلية بسرعة وأمان، فأنت في المكان الصحيح. نقدم خدمة سحب ونقل السيارات المعطلة على مدار 24 ساعة في جميع مناطق الإسماعيلية، سواء داخل المدينة أو على الطرق السريعة. فريقنا جاهز للوصول إليك في أسرع وقت، مع معدات حديثة تضمن نقل سيارتك بدون أي ضرر."
      >
        <FeatureGrid />
      </Section>

      <CtaBanner title="اتصل الآن واحصل على خدمة فورية" />

      <Section
        id="areas"
        title="نحن حولك في كل مكان — مناطق التغطية"
        subtitle="تغطي خدماتنا جميع المناطق الحيوية في محافظة الإسماعيلية، سواء كنت داخل المدينة أو على أطرافها، ونش إنقاذ الإسماعيلية من ونش العمار جاهز لخدمتك في أي وقت."
      >
        <AreaCards areas={ismailiaAreas} />
      </Section>

      <Section
        title="الطرق الرئيسية التي نغطيها"
        subtitle="انتشارنا على الطرق السريعة يضمن وصول أقرب ونش إليك في وقت قياسي."
      >
        <div className="flex flex-wrap gap-3">
          {mainRoads.map((r) => (
            <span key={r} className="rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-bold text-primary">
              {r}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/30jun" className="rounded-xl border border-border bg-card px-6 py-4 font-bold text-foreground transition-colors hover:border-primary/60">
            ونش إنقاذ محور 30 يونيو ←
          </Link>
          <Link to="/10oframadan" className="rounded-xl border border-border bg-card px-6 py-4 font-bold text-foreground transition-colors hover:border-primary/60">
            ونش إنقاذ العاشر من رمضان ←
          </Link>
        </div>
      </Section>

      <Section id="fleet" title="أسطول أوناشنا" subtitle="تصفح صور أسطول ونش العمار، وكل صورة تفتح في صفحة مستقلة.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => {
            const number = String(index + 1).padStart(3, "0");
            return <Link key={number} to="/gallery/$slug" params={{ slug: `fleet-${number}` }} className="overflow-hidden rounded-2xl border border-border bg-card"><img src={`/fleet-${number}.jpeg`} alt={`صورة ${index + 1} من أسطول ونش العمار`} className="aspect-[4/3] w-full object-cover" loading="lazy" /><div className="p-4 font-bold text-foreground">صورة من أسطول ونش العمار {index + 1}</div></Link>;
          })}
        </div>
        <Link to="/gallery" className="mt-6 inline-flex rounded-full border border-primary px-6 py-3 font-bold text-primary">عرض معرض الصور — 20 صورة في الصفحة</Link>
      </Section>

      <Section id="videos" title="فيديوهات من خدمات الإنقاذ" subtitle="مقاطع من أرشيف الموقع، مع تشغيل يدوي لتقليل التحميل الأولي.">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-border bg-card"><video controls preload="none" playsInline className="aspect-video w-full bg-black"><source src="/WhatsApp%20Video%202026-08-27%20at%206.43.46%20PM%20(1).mp4" type="video/mp4" /></video><div className="p-4"><h3 className="font-bold">فيديو من أرشيف خدمات ونش العمار</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">شاهد المقطع للتعرف على مشاهد من الخدمة.</p></div></article>
          <article className="overflow-hidden rounded-2xl border border-border bg-card"><video controls preload="none" playsInline className="aspect-video w-full bg-black"><source src="/WhatsApp%20Video%202026-09-20%20at%206.19.46%20PM.mp4" type="video/mp4" /></video><div className="p-4"><h3 className="font-bold">مقطع آخر من أرشيف ونش العمار</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">يبدأ تشغيل الفيديو عند الضغط، لتقليل التحميل الأولي للصفحة.</p></div></article>
        </div>
        <Link to="/videos/" className="mt-6 inline-flex rounded-full border border-primary px-6 py-3 font-bold text-primary">عرض كل الفيديوهات وصفحاتها المستقلة ←</Link>
      </Section>

      <Section title="مجموعة من آراء عملائنا">
        <Reviews items={reviews} />
      </Section>

      <Article>
        <h2>ونش إنقاذ الإسماعيلية 24 ساعة – خدمة سحب سيارات سريعة وآمنة | ونش العمار {SITE.phones.main}</h2>
        <p>
          في ظل زيادة الأعطال المفاجئة والحوادث على الطرق، أصبحت الحاجة إلى خدمة ونش إنقاذ الإسماعيلية
          أمرًا ضروريًا لكل سائق. سواء كنت داخل المدينة أو على الطرق السريعة، فإن وجود خدمة موثوقة وسريعة
          يمكن أن يوفر عليك الكثير من الوقت والقلق.
        </p>
        <p>
          تقدم شركة ونش العمار {SITE.phones.main} خدمات متكاملة في مجال سحب سيارات الإسماعيلية، مع تغطية
          شاملة لجميع المناطق وخدمة متاحة على مدار 24 ساعة، لتكون دائمًا في أمان مهما كانت ظروف الطريق.
        </p>
        <h3>لماذا تحتاج إلى ونش إنقاذ في الإسماعيلية؟</h3>
        <p>قد تتعرض سيارتك لأي عطل مفاجئ، مثل:</p>
        <ul>
          <li>نفاد البطارية</li>
          <li>أعطال المحرك</li>
          <li>الحوادث</li>
          <li>الغرز في الرمال</li>
        </ul>
        <p>
          في هذه الحالات، يكون الحل الأسرع هو التواصل مع رقم ونش إنقاذ الإسماعيلية للحصول على دعم فوري.
          وهنا يأتي دور ونش العمار الذي يوفر ونش إنقاذ 24 ساعة الإسماعيلية بأعلى مستوى من الاحترافية.
        </p>
        <h3>خدمات ونش العمار في الإسماعيلية</h3>
        <p>تقدم شركة ونش العمار مجموعة متنوعة من الخدمات لتلبية جميع احتياجات العملاء:</p>
        <ul>
          <li>سحب السيارات المعطلة بأحدث المعدات التي تضمن نقل السيارة بأمان تام.</li>
          <li>سطحة سيارات الإسماعيلية مجهزة لنقل جميع أنواع السيارات، سواء كانت صغيرة أو كبيرة.</li>
          <li>إنقاذ على الطرق السريعة — طريق القاهرة الإسماعيلية والطرق الصحراوية.</li>
          <li>خدمة ونش قريب مني — أسرع ونش إنقاذ يصل إليك خلال وقت قياسي.</li>
        </ul>
        <h3>سرعة استجابة لا مثيل لها</h3>
        <p>
          واحدة من أهم العوامل التي تميز ونش العمار هي سرعة الوصول. نحن ندرك أن الوقت عامل حاسم عند تعطل
          السيارة، لذلك عند طلب رقم ونش إنقاذ الإسماعيلية يتم تحديد موقعك بدقة وإرسال أقرب ونش إليك في
          أسرع وقت ممكن.
        </p>
        <h3>أسعار مناسبة وخدمة مضمونة</h3>
        <p>
          نقدم أسعارًا تنافسية تناسب جميع العملاء، مع شفافية كاملة في تحديد التكلفة قبل بدء الخدمة.
          العوامل التي تحدد السعر: المسافة، نوع السيارة، وطبيعة العطل. ورغم ذلك، نضمن دائمًا أفضل قيمة
          مقابل الخدمة.
        </p>
        <h3>الأمان أولاً</h3>
        <p>
          نحن في ونش العمار نضع سلامة سيارتك في المقام الأول، لذلك نستخدم معدات حديثة وفرق مدربة لضمان
          نقل السيارة بدون أي خدوش أو أضرار. سواء كنت تحتاج إلى سطحة سيارات الإسماعيلية أو خدمة إنقاذ
          سريعة، يمكنك الاعتماد علينا بالكامل.
        </p>
        <h3>لماذا تختار ونش العمار؟</h3>
        <ul>
          <li>خدمة 24 ساعة بدون توقف</li>
          <li>سرعة وصول عالية</li>
          <li>تغطية جميع المناطق</li>
          <li>أسعار مناسبة</li>
          <li>فريق محترف</li>
        </ul>
        <p>
          نحن لا نقدم مجرد خدمة، بل نقدم تجربة متكاملة تضمن راحة العميل. إذا كنت تبحث عن أفضل ونش إنقاذ
          في الإسماعيلية، فلا تتردد في التواصل مع ونش العمار الآن.
        </p>
      </Article>

      <CtaBanner title="احجز ونش الآن بأفضل سعر" />
    </>
  );
}
