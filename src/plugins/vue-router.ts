import type { VueConstructor } from "vue";
import VueRouter, { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "../views/HomeView.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(
        /* webpackChunkName: "CheckoutView" */ "../views/CheckoutView.vue"
      ),
  },
];

export const connectRouter = (Vue: VueConstructor) => {
  Vue.use(VueRouter);

  return new VueRouter({
    mode: "history",
    base: "",
    routes,
  });
};
