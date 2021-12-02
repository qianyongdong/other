/*
 * @Author: your name
 * @Date: 2021-06-15 11:25:24
 * @LastEditTime: 2021-06-15 11:56:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yodn\ajax\server-ajax.js
 */
const express = require('express');

const app= new express();

app.all('/home',(request,response)=>{
    response.sendFile(__dirname + '/ajax.html')
})

app.all('/data',(request,response)=>{
    response.send('用户数据')
})

app.listen(9000,()=>{
    console.log('服务已启动')
})

