import FilterCommon from "@/filters/common.filters";
const options = {
  FilterCommon
};

options.install = (Vue) => {
  for (let filter in options) {
    const filterInstaller = options[filter];
    if (filterInstaller && filter !== "install") {
      Vue.use(filterInstaller);
    }
  }
};
export default options;
