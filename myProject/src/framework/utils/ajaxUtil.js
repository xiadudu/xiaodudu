import axios from "axios";
import {
  URL_BASE
} from "@/framework/config/urls";
// 创建axios实例
let service = axios.create({
  // baseURL: '', // api的base_url
  // timeout: 30000, // 请求超时时间
  transformRequest: [function (data) {
    // 做任何你想要的数据转换
    return data;
  }]
});
service.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
}, error => {
  // Do something with request error
  console.log("error", error); // for debug
  Promise.reject(error);
});

service.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  let errorcode = error.response && error.response.status;
  if (errorcode === "404") {
    alert(error);
  } else if (!errorcode) {
    alert("请求超时或网络异常");
  } else {
    alert("请求失败");
  }
  return Promise.reject(error);
});
function doAjax ($cfg) {
  return service($cfg).then((res) => {
    return res.data;
  }).catch((error) => {
    let res = error.response;
    return Promise.reject({
      status: false,
      error: (res && res.data && res.data.message) || error.message,
      code: (res && res.status) || 0
    });
  });
}
export default {
  doGet (cfg) {
    cfg.method = "GET";
    cfg.url = `${URL_BASE}/${cfg.url}`;
    return doAjax(cfg);
  }
};
