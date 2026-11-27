import type { LocalArticle } from "./articles";
import { areaArticles } from "./article-content/area";
import { roadArticles } from "./article-content/road";
import { serviceArticles } from "./article-content/service";
import { guideArticlesA } from "./article-content/guide-a";
import { guideArticlesB } from "./article-content/guide-b";

// Hand-written articles, one file per group in ./article-content.
// To add an article: append an object to the matching file (or a new file listed here).
const content = [...areaArticles, ...roadArticles, ...serviceArticles, ...guideArticlesA, ...guideArticlesB];

const FLEET_PHOTO_COUNT = 94; // public/fleet-001.jpeg … fleet-094.jpeg
const UPDATED_AT = "2026-11-27";

export const additionalArticles: LocalArticle[] = content.map((article, index) => ({
  ...article,
  // 7 and 94 share no factor, so every article gets a different fleet photo.
  cover: `/fleet-${String(((index * 7) % FLEET_PHOTO_COUNT) + 1).padStart(3, "0")}.jpeg`,
  updatedAt: UPDATED_AT,
}));
