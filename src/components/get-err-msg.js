export default code => {
  let msg;
  switch (code) {
    case "-1":
    case "400":
      msg = "服务器错误，请稍后再试";
      break;
    case "1060":
      msg = "请求超时，请重试";
      break;
    case "1061":
      msg = "手机验证码错误";
      break;
    case "1062":
      msg = "手机验证码过期";
      break;
    case "1068":
      msg = "昵称格式错误";
      break;
    case "1069":
      msg = "该用户已经绑定了淘宝账号";
      break;
    case "1070":
      msg = "淘宝官方要求授权后购买商品才能获得返利";
      break;
    case "1071":
      msg = "该商品没有返利折扣或者链接无效";
      break;
    case "1072":
      msg = "服务连接失败";
      break;
    case "1031":
      msg = "订单不存在";
      break;
    case "1429":
      msg = "操作频率过快，请稍后再试";
      break;
    case "10006":
      msg = "请求的数据中包含错误的字段";
      break;
    case "10007":
      msg = "token miss";
      break;
    case "10008":
      msg = "Mixin 登录凭证丢失";
      break;
    case "10009":
      msg = "实名认证状态更新失败";
      break;
    case "10010":
      msg = "提交内容有误";
      break;
    case "10011":
      msg = "Mixin 未授权";
      break;
    case "10012":
      msg = "已经绑定过 Mixin 账号了";
      break;
    case "20007":
      msg = "操作超时，请重试"; // 短信Key过期
      break;
    case "20008":
      msg = "短信发送过于频繁";
      break;
    case "20009":
      msg = "手机号格式错误";
      break;
    case "20010":
      msg = "拒绝发送";
      break;
    case "20011":
      msg = "短信发送过多，请24H之后再试";
      break;
    case "20012":
      msg = "短信验证码错误";
      break;
    case "30003":
      msg = "上传头像为空";
      break;
    case "40000":
    case "40001":
    case "40002":
    case "40003":
    case "40004":
      msg = "登录凭证过期，请重新登录";
      break;
    case "ECONNABORTED":
      msg = "请求超时，请重试";
      break;
    case "NETWORKERROR":
      msg = "网络错误，请检查网络连接";
      break;
    default:
  }
  return msg;
};
