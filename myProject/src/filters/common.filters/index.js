import filter from "./time";

export default function install (Vue) {
  Vue.filter("filter", filter);
}
