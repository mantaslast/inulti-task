import Vue from "vue";
import App from "./App.vue";
/**
 * Styles
 */
import "./assets/style/index.scss";
/**
 * Plugins
 */
import { connectRouter } from "./plugins/vue-router";

const createApp: () => Vue = () => {
  Vue.config.productionTip = false;
  return new Vue({
    el: "#app",
    router: connectRouter(Vue),
    render: (h) => h(App),
  });
};

createApp();
