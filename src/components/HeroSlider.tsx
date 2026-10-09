import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import slide1 from "../assets/winch/slide1.jpg";
import slide2 from "../assets/winch/slide2.jpg";
import slide3 from "../assets/winch/slide3.jpg";
import slide4 from "../assets/winch/slide4.jpg";
import slide5 from "../assets/winch/slide5.jpg";
import slide6 from "../assets/winch/slide6.jpg";
import { SITE, tel, wa } from "../lib/site";

const slides = [
  { img: slide1, title: "ونش إنقاذ الإسماعيلية 24 ساعة", sub: "أسرع ونش إنقاذ يصل إليك أينما كنت داخل المدينة وعلى الطرق السريعة" },
  { img: slide2, title: "سطحة سيارات مجهزة لجميع الأنواع", sub: "نقل آمن 100% للسيارات الملاكي والنقل الخفيف بدون أي خدوش" },
  { img: slide3, title: "ونش إنقاذ محور 30 يونيو", sub: "تغطية كاملة للمحور والمدن التي يمر بها على مدار الساعة" },
  { img: slide4, title: "ونش إنقاذ العاشر من رمضان", sub: "جميع الأحياء والمناطق الصناعية — وصول خلال دقائق" },
  { img: slide5, title: "إنقاذ طوارئ على الطرق السريعة", sub: "طريق مصر الإسماعيلية، السويس، بورسعيد — نحن أقرب ونش لك" },
  { img: slide6, title: "أسعار مناسبة وخدمة مضمونة", sub: "شفافية كاملة في التكلفة قبل بدء الخدمة" },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);
  const current = slides[index] ?? slides[0]!;

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[540px] w-full overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>
      ))}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-4 pb-24">
          <span className="inline-block rounded-full border border-primary/50 bg-primary/10 px-4 py-1 text-xs font-bold text-primary">
            خدمة 24 ساعة — 7 أيام في الأسبوع
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
            {current.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {current.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={tel(SITE.phones.main)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-extrabold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              اتصل الآن {SITE.phones.main}
            </a>
            <a
              href={wa("أحتاج ونش إنقاذ الآن")}
              className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.62_0.19_145)] bg-[oklch(0.62_0.19_145)]/15 px-7 py-3.5 text-base font-extrabold text-foreground backdrop-blur transition-transform hover:scale-105"
            >
              واتساب — رد فوري
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={prev}
        aria-label="السابق"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/60 p-2 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        aria-label="التالي"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/60 p-2 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setIndex(i)}
            aria-label={`شريحة ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2 bg-foreground/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
