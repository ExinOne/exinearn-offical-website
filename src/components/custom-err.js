function CustomError(err, options) {
  const config = {
    isResponse: false
  };
  if (options && typeof options === "object") {
    Object.assign(config, options);
  }
  if (typeof err === "string") {
    err = new Error(err);
  }
  if (!err) {
    err = {};
  }
  this.name = err.name || "Response Error";
  if (config.isResponse && err.response && !err.isWrapped) {
    // 响应中的报错应该暴露response.data，以便后续能得到正确的提示
    this.message = err.response.data.message;
    this.code = err.response.data.code;
  } else {
    this.message = err.message;
    this.code = err.code;
  }
  this.stack = new Error().stack;
  const filterKeys = [
    { key: "pin", type: "string" },
    { key: "Authorization", type: "string" }
  ];
  if (err.stack) {
    this.prevStack = err.stack;
  }
  if (err.response) {
    this.response = filter(err.response, filterKeys);
  }
  if (err.config) {
    this.config = filter(err.config, filterKeys);
  }
}
CustomError.prototype = new Error();

export default CustomError;

function filter(originObj, targets) {
  if (!originObj || !targets || !Array.isArray(targets)) {
    return;
  }
  let obj = JSON.parse(JSON.stringify(originObj));

  targets.forEach(item => {
    // 对象缓存
    const objCache = [];
    findTarget(obj);

    function findTarget(targetObj) {
      //避免遍历到相同的对象
      if (objCache.indexOf(targetObj) >= 0) {
        return;
      }
      objCache.push(targetObj);
      if (targetObj && typeof targetObj === "object") {
        for (let k in targetObj) {
          if (k == item.key) {
            // 如果限制了item.type，则要求item.type匹配
            if (!item.type || typeof targetObj[k] === item.type) {
              //隐藏该结果
              targetObj[k] = "**SENSITIVE**";
            }
          }
          if (typeof targetObj[k] === "object") {
            // 投入递归
            findTarget(targetObj[k]);
          } else if (typeof targetObj[k] === "string") {
            // 如果可以被转为json，也要投入递归
            let convertedObj = null;
            try {
              convertedObj = JSON.parse(targetObj[k]);
            } catch (e) {
              // doing nothing
            }
            if (convertedObj) {
              targetObj[k] = JSON.stringify(findTarget(convertedObj));
            }
          }
        }
      }
      return targetObj;
    }
  });
  return obj;
}
