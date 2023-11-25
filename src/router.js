import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SearchView from "./views/SearchView.vue";
import DetailedView from "./views/DetailedResearchView.vue";
import NotFound from "./views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // All routes here
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search/:slug",
      name: "apartment",
      component: DetailedView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };
