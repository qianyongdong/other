/*
 * @Author: your name
 * @Date: 2021-05-20 10:47:52
 * @LastEditTime: 2021-05-20 11:33:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学习猿地_CSS_09_栅格系统布局源码\worker.js
 */
function fn(n) { 
    return n<=2?1:fn(n-1)+fn(n-2)
 }
 var onmessage=function (event) {  
     console.log(event,this)
     console.log("js接收"+event.data)
     var upper=event.data.toUpperCase();
     var number = fn(upper)
     console.log("js发送"+number)
     postMessage(number)
 }