import axios from "axios";
import CustomError from "./custom-err";
import getErrMsg from "./get-err-msg";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://app.exinearn.com/api/v1"
      : "",
  timeout: 20000,
  headers: {
    common: {
      accept: "application/prs.exin.v1+json",
      "x-app-refer": "exin"
    }
  }
});

service.interceptors.request.use(
  req => Promise.resolve(req),
  err => Promise.reject(err)
);
service.interceptors.response.use(
  res => Promise.resolve(res),
  err => {
    if (err.response && err.response.data) {
      // 如果不存在code，则报服务器错误
      const code =
        (err.response.data.code && err.response.data.code.toString()) || "400";
      const msg = getErrMsg(code);
      return Promise.reject(
        new CustomError(responseError(err, msg, code), { isResponse: true })
      );
    }
    if (err.code === "ECONNABORTED") {
      // 超时
      return Promise.reject(
        new CustomError(
          responseError(err, getErrMsg("ECONNABORTED"), { isResponse: true })
        )
      );
    }
    if (err.message === "Network Error") {
      return Promise.reject(
        new CustomError(
          responseError(err, getErrMsg("NETWORKERROR"), { isResponse: true })
        )
      );
    }
    return Promise.reject(new CustomError(err));
  }
);

function responseError(err, message, code) {
  // 包装错误类
  const e = Object.create(err);
  e.stack = err.stack || new Error().stack;
  e.name = "Response Error";
  if (code !== undefined) {
    e.prevCode = e.code;
    e.code = code;
  }
  if (message !== undefined) {
    e.prevMsg = e.message;
    e.message = message;
  }
  return e;
}

export default service;
