/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import classRouter from "./class.routers";
import home from "@/view/home/home.vue";

// 路由配置参考：https://router.vuejs.org/zh-cn/
Vue.use(Router);
//  mode: "history",
const router = {
  routes: [{
    path: "/",
    component: home
  },// _template
  ...classRouter
  ]
};

const RouterInstance = new Router(router);

export default RouterInstance;
