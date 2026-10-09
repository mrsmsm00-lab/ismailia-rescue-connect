import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";
import { rescueVideos } from "../lib/videos";
import { SITE } from "../lib/site";

export const Route = createFileRoute("/videos/")({
  head: () => ({
    meta: [
      { title: "فيديوهات ونش العمار | إنقاذ وسحب السيارات بالإسماعيلية" },
      { name: "description", content: "شاهد فيديوهات من أرشيف خدمات ونش العمار، مع صفحة مستقلة لكل فيديو ومشغل فيديو مباشر." },
    ],
    links: [{ rel: "canonical", href: SITE.domain + "/videos/" }],
  }),
  component: VideosPage,
});
function VideosPage() {
  return <main className="mx-auto max-w-6xl px-4 py-12">
    <header className="mx-auto max-w-3xl py-8 text-center"><PlayCircle className="mx-auto h-10 w-10 text-primary" /><h1 className="mt-4 text-3xl font-extrabold text-foreground md:text-5xl">فيديوهات ونش العمار</h1><p className="mt-4 leading-8 text-muted-foreground">مقاطع من أرشيف خدمات الإنقاذ، وكل فيديو له صفحة مستقلة بعنوان ووصف ومشغل مباشر.</p></header>
    <div className="grid gap-6 md:grid-cols-2">{rescueVideos.map((video) => <article key={video.slug} className="overflow-hidden rounded-2xl border border-border bg-card"><video controls preload="none" playsInline className="aspect-video w-full bg-black"><source src={video.src} type="video/mp4" /></video><div className="p-5"><h2 className="font-bold text-foreground"><Link to="/videos/$slug" params={{ slug: video.slug }} className="hover:text-primary">{video.title}</Link></h2><p className="mt-2 text-sm leading-7 text-muted-foreground">{video.description}</p><Link to="/videos/$slug" params={{ slug: video.slug }} className="mt-3 inline-block font-bold text-primary">صفحة الفيديو ←</Link></div></article>)}</div>
  </main>;
}
