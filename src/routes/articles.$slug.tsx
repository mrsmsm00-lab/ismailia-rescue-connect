import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Article, CtaBanner } from "../components/Sections";
import { getArticle, articles } from "../lib/articles";
import { SITE } from "../lib/site";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const pageMatch = params.slug.match(/^page(\d+)$/);
    if (pageMatch) return { article: null, page: Math.max(2, Number(pageMatch[1]) || 2) };
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article, page: 1 };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.article?.seoTitle ?? "مقالات ونش العمار" },
      { name: "description", content: loaderData?.article?.description ?? "مقالات ونصائح إنقاذ السيارات من ونش العمار." },
      { name: "keywords", content: loaderData?.article?.keyword ?? "ونش إنقاذ الإسماعيلية" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: loaderData?.article?.seoTitle ?? "مقالات ونش العمار" },
      { property: "og:description", content: loaderData?.article?.description ?? "مقالات ونصائح إنقاذ السيارات." },
      { property: "og:image", content: loaderData?.article?.cover ?? "" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { article, page } = Route.useLoaderData();
  const pageSize = 20;
  const totalPages = Math.max(1, Math.ceil(articles.length / pageSize));
  if (!article) {
    const currentPage = Math.min(page, totalPages);
    const pageArticles = articles.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    return (
      <>
        <section className="border-b border-border bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center">
            <Link to="/articles" className="font-bold text-primary">كل المقالات</Link>
            <h1 className="mt-5 text-3xl font-extrabold text-foreground md:text-5xl">مقالات ونصائح السائقين — الصفحة {currentPage}</h1>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">أدلة عملية للتعامل مع أعطال السيارات وطلب ونش الإنقاذ بأمان.</p>
          </div>
        </section>
        <Article>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageArticles.map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
                <Link to="/articles/$slug" params={{ slug: item.slug }} className="block">
                  <img src={item.cover} alt={item.title} className="h-48 w-full object-cover" loading="lazy" />
                  <div className="p-5"><span className="text-xs font-bold text-primary">{item.keyword}</span><h2 className="mt-3 text-xl font-extrabold leading-8 text-foreground">{item.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p></div>
                </Link>
              </article>
            ))}
          </div>
          <nav aria-label="التنقل بين صفحات المقالات" className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <Link to={currentPage <= 2 ? "/articles" : "/articles/$slug"} params={currentPage <= 2 ? undefined : { slug: `page${currentPage - 1}` }} className="rounded-lg border border-border px-4 py-2 text-sm font-bold">السابق</Link>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <Link key={number} to={number === 1 ? "/articles" : "/articles/$slug"} params={number === 1 ? undefined : { slug: `page${number}` }} aria-current={currentPage === number ? "page" : undefined} className={`min-w-10 rounded-lg border px-3 py-2 text-center text-sm font-bold ${currentPage === number ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>{number}</Link>)}
            <Link to="/articles/$slug" params={{ slug: `page${Math.min(totalPages, currentPage + 1)}` }} className="rounded-lg border border-border px-4 py-2 text-sm font-bold">التالي</Link>
          </nav>
          <p className="mt-4 text-center text-sm text-muted-foreground">عرض {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, articles.length)} من {articles.length} مقالًا</p>
        </Article>
      </>
    );
  }
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
