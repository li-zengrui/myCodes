// fs和path两个系统模块
const fs = require("fs");
const path = require("path");

// __dirname表示当前路径
// path.join()表示路径拼接
// 这里的fs.readFile使用了绝对路径
fs.readFile(path.join(__dirname, "1.hello.js"), "utf8", (err, doc) => {
  if (err !== null) {
    console.log(err);
    return;
  }
  console.log(doc);
});
