import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { rescueVideos } from "../lib/videos";
import { SITE } from "../lib/site";
import { BreadcrumbStructuredData, homeBreadcrumb } from "../components/BreadcrumbStructuredData";

export const Route = createFileRoute("/videos/$slug")({
  loader: ({ params }) => {
    const video = rescueVideos.find((item) => item.slug === params.slug);
    if (!video) throw notFound();
    return { video };
  },
  head: ({ loaderData }) => {
    const video = loaderData?.video;
    return {
      meta: [
        { title: video?.title ?? "فيديوهات ونش العمار" },
        { name: "description", content: video?.description ?? "فيديو من أرشيف ونش العمار لخدمات إنقاذ السيارات." },
        { property: "og:type", content: "video.other" },
        ...(video ? [{ property: "og:video", content: SITE.domain + video.src }, { property: "og:video:type", content: "video/mp4" }] : []),
      ],
      links: [{ rel: "canonical", href: SITE.domain + "/videos/" + (video?.slug ?? "") + "/" }],
    };
  },
  component: VideoDetailPage,
});
function VideoDetailPage() {
  const { video } = Route.useLoaderData();
  return <><BreadcrumbStructuredData items={[homeBreadcrumb, { name: "فيديوهات", url: SITE.domain + "/videos/" }, { name: video.title, url: SITE.domain + "/videos/" + video.slug + "/" }]} /><main className="mx-auto max-w-5xl px-4 py-12">
    <Link to="/videos/" className="inline-flex items-center gap-2 font-bold text-primary"><ArrowRight className="h-4 w-4" />كل الفيديوهات</Link>
    <h1 className="mt-6 text-3xl font-extrabold leading-relaxed text-foreground md:text-5xl">{video.title}</h1>
    <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{video.description}</p>
    <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-black"><video controls preload="metadata" playsInline className="max-h-[75vh] w-full"><source src={video.src} type="video/mp4" />متصفحك لا يدعم تشغيل الفيديو.</video></div>
    <div className="mt-8 flex flex-wrap gap-3"><a href="tel:+201206188884" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground"><Phone className="h-4 w-4" />اتصل لطلب ونش</a><Link to="/fleet/" className="rounded-full border border-border px-6 py-3 font-bold">تصفح أسطول الأوناش</Link></div>
  </main></>;
}
