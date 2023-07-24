/*
 * @Author: Hong.Zhang
 * @Date: 2023-07-24 17:03:16
 * @Description: 
 */
var objectXss = require('./index');

console.log(objectXss(`<html>test</html>`));
console.log(objectXss({
  html: `<html>html</html>`,
  obj: {
    head: `<head>head</head>`,
    body: `<body>body</body>`,
  },
  arr: ['<script>script</script>']
}));