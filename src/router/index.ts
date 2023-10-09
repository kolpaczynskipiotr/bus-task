import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BusTimetable from "@/pages/BusTimetable.vue";
import BusStops from "@/pages/BusStops.vue";

const busRoutes: Array<RouteRecordRaw> = [
  { path: "/", component: BusTimetable },
  { path: "/stops", component: BusStops },
];

const routes: Array<RouteRecordRaw> = [...busRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
