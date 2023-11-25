import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "home",
    alias: "/home",
    path: "/",
    component: () => import("@/views/Main.vue"),
  },
];

export default routes;
