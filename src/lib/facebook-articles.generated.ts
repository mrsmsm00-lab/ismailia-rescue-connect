import type { LocalArticle } from "./articles";

export type FacebookArticle = LocalArticle & { sourcePostId: string; sourcePostUrl: string; publishedAt: string };

// Updated automatically by the daily Facebook-to-article workflow.
export const facebookArticles: FacebookArticle[] = [];
