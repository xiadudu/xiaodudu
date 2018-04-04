// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import componentsInstaller from "@/framework/core/components";
import filtersInstaller from "@/framework/core/filters";

Vue.config.productionTip = false;
componentsInstaller.install(Vue);
filtersInstaller.install(Vue);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
