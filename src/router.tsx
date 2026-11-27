import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Canonical URLs and the sitemap use a trailing slash (as the old site did),
    // so serve pages there instead of redirecting them away from it.
    trailingSlash: "always",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
