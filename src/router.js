import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SearchView from "./views/AdvancedResearchView.vue";
import DetailedView from "./views/DetailedResearchView.vue";
import NotFound from "./views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // All routes here
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/search/:slug",
      name: "DetailedView",
      component: DetailedView,
    },
    {
      path: "/search",
      name: "SearchView",
      component: SearchView,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export { router };
