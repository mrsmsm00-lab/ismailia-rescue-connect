export type ArticleContentSection = { heading: string; paragraphs: string[]; bullets?: string[] };

// One hand-written article. The cover image is assigned in ../additional-articles.ts.
export type ArticleContent = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  keyword: string;
  intro: string;
  sections: ArticleContentSection[];
};
