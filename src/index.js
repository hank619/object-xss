/*
 * @Author: Hong.Zhang
 * @Date: 2023-07-24 16:49:58
 * @Description:
 */
var xss = require("xss");

function objectXss(input, options) {
  if (!input) {
    return input;
  }
  const isString = typeof input === "string";
  if (isString) {
    return xss(input, options);
  }
  return processValues(input, options);
}

function processValues(input, options) {
  const isArray = input instanceof Array;
  const result = isArray ? [] : {};
  for (const [key, value] of Object.entries(input)) {
    result[key] =
      typeof value === "object"
        ? processValues(value, options)
        : xss(value, options);
  }
  return result;
}

module.exports = objectXss;
