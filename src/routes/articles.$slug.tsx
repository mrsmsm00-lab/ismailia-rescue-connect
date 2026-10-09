import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Article, CtaBanner } from "../components/Sections";
import { getArticle, articles } from "../lib/articles";
import { SITE } from "../lib/site";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.article.seoTitle ?? "مقالات ونش العمار" },
      { name: "description", content: loaderData?.article.description ?? "مقالات ونصائح إنقاذ السيارات من ونش العمار." },
      { name: "keywords", content: loaderData?.article.keyword ?? "ونش إنقاذ الإسماعيلية" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: loaderData?.article.seoTitle ?? "مقالات ونش العمار" },
      { property: "og:description", content: loaderData?.article.description ?? "مقالات ونصائح إنقاذ السيارات." },
      { property: "og:image", content: loaderData?.article.cover ?? "" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((item) => item.slug !== article.slug && item.keyword !== article.keyword).slice(0, 4);

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <Link to="/articles" className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowRight className="h-4 w-4" /> كل المقالات</Link>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> الإسماعيلية والمناطق المحيطة</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> دليل عملي للسائقين</span>
          </div>
          <h1 className="mt-5 text-3xl font-extrabold leading-relaxed text-foreground md:text-5xl">{article.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-muted-foreground">{article.intro}</p>
          <img src={article.cover} alt={article.title} className="mt-8 max-h-[420px] w-full rounded-2xl border border-border object-cover" loading="eager" />
          {article.gallery && article.gallery.length > 0 && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {article.gallery.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                  <figcaption className="p-3 text-sm leading-6 text-muted-foreground">{image.alt}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
      <Article>
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>
        ))}
        <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h2>محتاج ونش إنقاذ؟</h2>
          <p>لما تتواصل مع ونش العمار، وضّح مكانك ونوع العربية وحالتها والوجهة المطلوبة، واتأكد من تفاصيل الخدمة والتكلفة قبل النقل.</p>
          <p><a className="font-extrabold text-primary" href={`tel:+2${SITE.phones.main}`} dir="ltr">{SITE.phones.main}</a></p>
        </div>
        <section className="mt-12">
          <h2>مقالات ممكن تهمك</h2>
          <ul>{related.map((item) => <li key={item.slug}><Link to="/articles/$slug" params={{ slug: item.slug }} className="font-bold text-primary">{item.title}</Link></li>)}</ul>
        </section>
      </Article>
      <CtaBanner title="ونش العمار — اطلب المساعدة واتأكد من تفاصيل الخدمة" />
    </>
  );
}
