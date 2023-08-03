/*
 * @Author: Hong.Zhang
 * @Date: 2023-07-24 17:03:16
 * @Description:
 */
var objectXss = require("./index");

test("process undefined", () => {
  expect(objectXss(undefined)).toBeUndefined();
});

test("process null", () => {
  expect(objectXss(null)).toBeNull();
});

test("process number", () => {
  expect(objectXss(123)).toBe(123);
});

test("process boolean", () => {
  expect(objectXss(true)).toBe(true);
});

test("process string", () => {
  expect(objectXss("<html>test</html>")).toBe("&lt;html&gt;test&lt;/html&gt;");
});

test("process object", () => {
  expect(
    objectXss({
      stringKey: `<html>html</html>`,
      objKey: {
        head: `<head>head</head>`,
        body: `<body>body</body>`,
      },
      arrKey: ["<script>script</script>"],
      numberKey: 123,
      booleanKey: true,
      nullKey: null,
      undefinedKey: undefined,
    })
  ).toStrictEqual({
    stringKey: "&lt;html&gt;html&lt;/html&gt;",
    objKey: {
      head: "&lt;head&gt;head&lt;/head&gt;",
      body: "&lt;body&gt;body&lt;/body&gt;",
    },
    arrKey: ["&lt;script&gt;script&lt;/script&gt;"],
    numberKey: 123,
    booleanKey: true,
    nullKey: null,
    undefinedKey: undefined,
  });
});
