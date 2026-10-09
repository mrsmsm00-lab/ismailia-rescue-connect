import { Clock, MapPin, Phone, ShieldCheck, Star, Wallet, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { SITE, tel, wa } from "../lib/site";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-3xl leading-8 text-muted-foreground">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function FeatureGrid() {
  const features = [
    { icon: Zap, title: "سرعة الوصول", desc: "أقرب ونش إليك يتحرك فورًا ليصل خلال دقائق." },
    { icon: Clock, title: "خدمة 24 ساعة", desc: "متاحون ليلًا ونهارًا وفي العطلات بدون توقف." },
    { icon: ShieldCheck, title: "أمان 100%", desc: "معدات حديثة وفريق مدرب لنقل سيارتك بدون أي ضرر." },
    { icon: Wallet, title: "أسعار مناسبة", desc: "شفافية كاملة في التكلفة قبل بدء الخدمة." },
  ];
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f) => (
        <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
          <f.icon className="h-8 w-8 text-primary" />
          <h3 className="mt-4 font-bold text-foreground">{f.title}</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function AreaCards({ areas }: { areas: { name: string; desc: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {areas.map((a) => (
        <div key={a.name} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
          <MapPin className="h-6 w-6 text-primary" />
          <h3 className="mt-3 font-bold text-foreground">{a.name}</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{a.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function Reviews({ items }: { items: { name: string; text: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((r, i) => (
        <figure key={`${r.name}-${i}`} className="rounded-2xl border border-border bg-card p-6">
          <div className="flex gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <blockquote className="mt-4 text-sm leading-8 text-muted-foreground">"{r.text}"</blockquote>
          <figcaption className="mt-4 text-sm font-bold text-foreground">{r.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function CtaBanner({ phone, title }: { phone?: string; title: string }) {
  const p = phone ?? SITE.phones.main;
  return (
    <section className="border-y border-primary/30 bg-gradient-to-l from-primary/15 via-card to-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center">
        <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">{title}</h2>
        <p className="text-muted-foreground">لا تنتظر… نحن في خدمتك 24 ساعة — ونش إنقاذ يصل إليك خلال دقائق</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={tel(p)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            <span dir="ltr">{p}</span>
          </a>
          <a
            href={wa("أحتاج ونش إنقاذ الآن")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-lg font-bold text-foreground transition-transform hover:scale-105"
          >
            احجز ونش الآن بأفضل سعر
          </a>
        </div>
      </div>
    </section>
  );
}

export function Article({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 text-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_li]:leading-8 [&_li]:text-muted-foreground [&_p]:mt-4 [&_p]:leading-9 [&_p]:text-muted-foreground [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pr-6">
      {children}
    </article>
  );
}
