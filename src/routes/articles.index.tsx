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
          {articles.map((article) => (
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
      </Section>
    </>
  );
}
