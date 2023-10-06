import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BusTimetable from "@/pages/BusTimetable.vue";

const busRoutes: Array<RouteRecordRaw> = [
  { path: "/stops", component: BusTimetable },
];

const routes: Array<RouteRecordRaw> = [...busRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
