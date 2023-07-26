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

test("process string", () => {
  expect(objectXss("<html>test</html>")).toBe("&lt;html&gt;test&lt;/html&gt;");
});

test("process object", () => {
  expect(
    objectXss({
      html: `<html>html</html>`,
      obj: {
        head: `<head>head</head>`,
        body: `<body>body</body>`,
      },
      arr: ["<script>script</script>"],
    })
  ).toStrictEqual({
    html: "&lt;html&gt;html&lt;/html&gt;",
    obj: {
      head: "&lt;head&gt;head&lt;/head&gt;",
      body: "&lt;body&gt;body&lt;/body&gt;",
    },
    arr: ["&lt;script&gt;script&lt;/script&gt;"],
  });
});
