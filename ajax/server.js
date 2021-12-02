/*
 * @Author: your name
 * @Date: 2021-06-11 16:03:32
 * @LastEditTime: 2021-06-17 11:13:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yodn\ajax\server.js
 */
const { request, response } = require("express");
const express = require("express");

const app = express();

app.get("/server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  const data = {
    name: "ajax",
    type: "get",
  };
  let str = JSON.stringify(data);
  response.send(str);
});

app.post("/server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  const data = {
    name: "ajax",
    type: "post",
  };
  let str = JSON.stringify(data);
  response.send(str);
});

app.all("/server-time", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  //设置延迟加载
  setTimeout(() => {
    response.send("延迟响应");
  }, 3000);
});

app.all("/server-abort", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  setTimeout(() => {
    response.send("取消重复请求");
  }, 3000);
});

app.all("/server-jquery", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  const data = {
    name: "ajax",
    type: "jquery",
  };
  let str = JSON.stringify(data);
  response.send(str);
});

app.all("/server-axios", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  const data = {
    name: "ajax",
    type: "axios",
  };
  let str = JSON.stringify(data);
  response.send(str);
});
app.all("/server-fetch", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  const data = {
    name: "ajax",
    type: "fetch",
  };
  let str = JSON.stringify(data);
  response.send(str);
});

app.all("/server-jsonp", (request, response) => {
  // response.send('console.log("hello,jsonp")')
  const data = {
    name: "jsonp",
  };
  let str = JSON.stringify(data);
  response.end(`handle(${str})`);
});

app.all("/check-username", (request, response) => {
  // response.send('console.log("hello,jsonp")')
  const data = {
    exsit: 1,
    msg: "用户名已存在",
  };
  let str = JSON.stringify(data);
  response.end(`handle(${str})`);
});

app.all("/jquery-jsonp", (request, response) => {
  // response.send('console.log("hello,jsonp")')
  const data = {
    name: "jquery-jsonp",
    city: ["beijing", "shanghai"],
  };
  let str = JSON.stringify(data);
  let cb = request.query.callback;
  response.send(`${cb}(${str})`);
});

app.all("/cors", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send("cors");
});

app.all("/model/getModelList", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  let str = {};
  str.page = 1;
  row = {};
  row.id = 1;
  row.number = 1;
  row.name = 1;
  row.stakeNo = 1;
  row.pipeDiameter = 1;
  row.purpose = 1;
  row.size = 1;
  row.modelType = 1;
  row.start = 1;
  row.end = 1;
  row.width = 1;
  row.height = 1;
  row.longitude = 1;
  row.latitude = 1;
  row.describe = 1;
  row.remark = 1;
  row.modelDocument = 1;
  str.rows = [];
  str.rows.push(row);
  str.total = 1;
  response.send(str);
});

app.listen(8000, () => {
  console.log("服务已启动");
});
