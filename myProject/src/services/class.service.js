import ajaxUtil from "@/framework/utils/ajaxUtil";

export default {
  // 创建项目
  getData (cfg) {
    cfg.url = "class/allData";
    return ajaxUtil.doGet(cfg);
  }
};
