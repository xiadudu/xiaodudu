import ajaxUtil from "@/framework/utils/ajaxUtil";

export default {
  // 创建项目
  getData (cfg) {
    cfg.url = "allData";
    return ajaxUtil.doGet(cfg);
  }
};
