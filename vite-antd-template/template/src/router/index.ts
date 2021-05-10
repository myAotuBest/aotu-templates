import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: () => ({ path: "/home" }),
  },
  {
    path: "/home",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../components/About.vue"),
  },
];

const route = createRouter({
  history: createWebHistory(""),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    };
  },
});

export default route;
