import StrLength from "./str.js";
const options = {
  StrLength
};
options.install = (Vue) => {
  for (let filter in options) {
    Vue.filter("str_filter", filter);
  }
};
export default options;
