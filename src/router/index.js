import { createRouter, createWebHistory } from "vue-router";
import Log from "../views/Log.vue";
import Receipe from "../views/Receipe.vue";

const routes = [
  {
    path: "/",
    name: "Receipe",
    component: Receipe,
  },
  {
    path: "/log",
    name: "Log",
    component: Log,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
