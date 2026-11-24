import { describe, expect, it } from "vitest";

import { postToArticle } from "@/lib/dashboard-articles";

describe("postToArticle", () => {
  it("splits the dashboard body into intro, sections and bullets", () => {
    const article = postToArticle({
      title: "عنوان",
      slug: "test-post",
      excerpt: "وصف مختصر",
      body: "مقدمة المقال.\n\n## عنوان أول\nسطر أول\nسطر ثان\n\nفقرة ثانية\n- نقطة 1\n- نقطة 2\n\n## عنوان ثان\nنص",
    });

    expect(article.intro).toBe("مقدمة المقال.");
    expect(article.description).toBe("وصف مختصر");
    expect(article.seoTitle).toBe("عنوان | ونش العمار");
    expect(article.sections).toEqual([
      { heading: "عنوان أول", paragraphs: ["سطر أول سطر ثان", "فقرة ثانية"], bullets: ["نقطة 1", "نقطة 2"] },
      { heading: "عنوان ثان", paragraphs: ["نص"] },
    ]);
  });

  it("falls back to the excerpt when the body has no intro", () => {
    const article = postToArticle({ title: "ع", slug: "s", excerpt: "وصف", body: "## قسم\nنص", seo_title: "سيو", keyword: "ونش" });

    expect(article.intro).toBe("وصف");
    expect(article.seoTitle).toBe("سيو");
    expect(article.keyword).toBe("ونش");
  });
});
