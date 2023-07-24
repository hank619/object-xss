/*
 * @Author: Hong.Zhang
 * @Date: 2023-07-24 16:49:58
 * @Description: 
 */
var xss = require("xss");

function objectXss(obj, options) {
  const isString = typeof obj === 'string';
  if (isString) {
    return xss(obj);
  }
  return processValues(obj);
}

function processValues(obj) {
  const isArray = obj instanceof Array;
  const result = isArray ? [] : {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = typeof value === 'object' ? processValues(value) : xss(value);
  }
  return result;
}

module.exports = objectXss;
