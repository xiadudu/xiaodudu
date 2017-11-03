// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import filterAll from "./filters/str";
import componentALl from "./components/textComponent.vue";
import hello from "./components/Hello.vue";

Vue.filter("strilter", filterAll);
Vue.component("du-s", componentALl);
Vue.component("hello", hello);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
