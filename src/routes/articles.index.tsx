import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen } from "lucide-react";
import { articles } from "../lib/articles";
import { Section } from "../components/Sections";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "مقالات ونصائح ونش إنقاذ الإسماعيلية | ونش العمار" },
      { name: "description", content: "اقرأ أدلة عملية عن ونش إنقاذ الإسماعيلية والعاشر من رمضان ومحور 30 يونيو والطرق الرئيسية، ونصائح التعامل مع أعطال السيارات بأمان." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ArticlesIndex,
});

function ArticlesIndex() {
  const pageMatch = null;
  const pageSize = 20;
  const totalPages = Math.max(1, Math.ceil(articles.length / pageSize));
  const currentPage = Math.min(Math.max(1, Number(pageMatch?.[1]) || 1), totalPages);
  const pageArticles = articles.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <BookOpen className="mx-auto h-10 w-10 text-primary" />
          <h1 className="mt-5 text-4xl font-extrabold text-foreground md:text-5xl">مقالات ونصائح السائقين</h1>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">أدلة عملية عن التعامل مع أعطال السيارات وطلب ونش الإنقاذ في الإسماعيلية والعاشر من رمضان ومحور 30 يونيو والطرق الرئيسية. اختار المنطقة أو الموضوع اللي يهمك.</p>
        </div>
      </section>
      <Section title={`كل المقالات (${articles.length})`} subtitle="محتوى متنوع، وكل مقال له عنوان ورابط ووصف مخصص لمحركات البحث.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageArticles.map((article) => (
            <article key={article.slug} className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/60">
              <Link to="/articles/$slug" params={{ slug: article.slug }} className="block">
                <img src={article.cover} alt={article.title} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <span className="text-xs font-bold text-primary">{article.keyword}</span>
                  <h2 className="mt-3 text-xl font-extrabold leading-8 text-foreground">{article.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{article.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-primary">اقرأ المقال <ArrowLeft className="h-4 w-4" /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        {totalPages > 1 && (
          <nav aria-label="التنقل بين صفحات المقالات" className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <Link
              to={currentPage - 1 <= 1 ? "/articles" : "/articles/$slug"}
              params={currentPage - 1 <= 1 ? undefined : { slug: `page${currentPage - 1}` }}
              aria-disabled={currentPage === 1}
              className={`rounded-lg border border-border px-4 py-2 text-sm font-bold ${currentPage === 1 ? "pointer-events-none opacity-40" : "hover:border-primary"}`}
            >السابق</Link>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <Link
                key={pageNumber}
                to={pageNumber === 1 ? "/articles" : "/articles/$slug"}
                params={pageNumber === 1 ? undefined : { slug: `page${pageNumber}` }}
                aria-current={currentPage === pageNumber ? "page" : undefined}
                className={`min-w-10 rounded-lg border px-3 py-2 text-center text-sm font-bold ${currentPage === pageNumber ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}
              >{pageNumber}</Link>
            ))}
            <Link
              to="/articles/$slug"
              params={{ slug: `page${Math.min(totalPages, currentPage + 1)}` }}
              aria-disabled={currentPage === totalPages}
              className={`rounded-lg border border-border px-4 py-2 text-sm font-bold ${currentPage === totalPages ? "pointer-events-none opacity-40" : "hover:border-primary"}`}
            >التالي</Link>
          </nav>
        )}
        <p className="mt-4 text-center text-sm text-muted-foreground">عرض {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, articles.length)} من {articles.length} مقالًا</p>
      </Section>
    </>
  );
}
