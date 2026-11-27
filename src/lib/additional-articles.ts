import type { LocalArticle } from "./articles";
import { areaArticles } from "./article-content/area";
import { roadArticles } from "./article-content/road";
import { serviceArticles } from "./article-content/service";
import { guideArticlesA } from "./article-content/guide-a";
import { guideArticlesB } from "./article-content/guide-b";
import { areaCityArticles } from "./article-content/area-city";
import { areaCanalArticles } from "./article-content/area-canal";
import { areaWestArticles } from "./article-content/area-west";

// Hand-written articles, one file per group in ./article-content.
// To add an article: append an object to the matching file (or a new file listed here).
// New groups go at the end so existing articles keep their cover photos.
const content = [
  ...areaArticles,
  ...roadArticles,
  ...serviceArticles,
  ...guideArticlesA,
  ...guideArticlesB,
  ...areaCityArticles,
  ...areaCanalArticles,
  ...areaWestArticles,
];

const FLEET_PHOTO_COUNT = 94; // public/fleet-001.jpeg … fleet-094.jpeg
const UPDATED_AT = "2026-11-27";

export const additionalArticles: LocalArticle[] = content.map((article, index) => ({
  ...article,
  // 7 and 94 share no factor, so the first 94 articles all get different fleet photos.
  cover: `/fleet-${String(((index * 7) % FLEET_PHOTO_COUNT) + 1).padStart(3, "0")}.jpeg`,
  updatedAt: UPDATED_AT,
}));
