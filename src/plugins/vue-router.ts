import type { VueConstructor } from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import CheckoutView from "../views/CheckoutView.vue";

const routes: RouteConfig[] = [
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
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
