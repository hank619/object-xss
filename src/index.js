/*
 * @Author: Hong.Zhang
 * @Date: 2023-07-24 16:49:58
 * @Description:
 */
var xss = require("xss");

function objectXss(input, options) {
  // null and undefined
  if (input === null || input === undefined) return input;

  // string
  if (typeof input === "string") {
    return xss(input, options);
  }

  // object and array
  if (typeof input === "object") {
    const isArray = input instanceof Array;
    const result = isArray ? [] : {};
    for (const [key, value] of Object.entries(input)) {
      result[key] = objectXss(value, options);
    }
    return result;
  }

  // basic type, like number, boolean
  return input;
}

module.exports = objectXss;
