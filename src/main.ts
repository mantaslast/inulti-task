import Vue from "vue";
import VueCompositionAPI from '@vue/composition-api'

import App from "./App.vue";
/**
 * Styles
 */
import "./assets/style/index.scss";
/**
 * Plugins
 */
import { connectRouter } from "./plugins/vue-router";
import http from "./plugins/http";

const createApp: () => Vue = () => {
  Vue.use(VueCompositionAPI)
  Vue.config.productionTip = false;
  Vue.prototype.$http = http
  return new Vue({
    el: "#app",
    router: connectRouter(Vue),
    render: (h) => h(App),
  });
};

createApp();
