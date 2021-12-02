/*
 * @Author: your name
 * @Date: 2021-06-21 13:57:57
 * @LastEditTime: 2021-06-22 15:00:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yodn\node\helloNpm\node_modules\index.js
 */
// const math = require("math")

// console.log(math.add(123,456))

const fs = require("fs")
// console.log(fs)
// var str ="hello"
// var bf=Buffer.from(str)
// console.log(bf.toString())
// var fb=Buffer.alloc(10)
// var fb1=Buffer.allocUnsafe(10)
// fb[0]=250
// console.log(fb,fb[0].toString(2),fb1)
// var fd=fs.openSync("hello.txt","w")
// fs.writeSync(fd,'chigu11a123123',2)
// fs.closeSync(fd)
// console.log(fd)
// fs.open('c:/Users/Administrator/Desktop/yodn/node/helloNpm/hello2.txt','w',function (err,fd) {
//     console.log(arguments)//0:err,1:文件编号
//     if(!err){
//         fs.write(fd,'写入成功111',6,{flag:'a'},function (err) { 
//             console.log(arguments)//0:err,1:写入长度byte 默认存储格式为uft8，1汉字3byte,3:内容
//             if(!err){
//                 fs.close(fd,function(err){
//                     console.log(arguments)
//                 })
//             }
//          })
//     }
//  })
// fs.writeFile("c:\\Users\\Administrator\\Desktop\\yodn\node\\helloNpm\\hello2.txt","w",function(err,fd){
//     console.log(arguments)
// })
// fs.writeFileSync('c:/Users/Administrator/Desktop/yodn/node/helloNpm/hello2.txt','重新写入',{flag:'a'})
// fs.writeFileSync('c:/Users/Administrator/Desktop/yodn/node/helloNpm/hello2.txt','重新写入',{flag:'a'})
// var fd=fs.openSync("c:/Users/Administrator/Desktop/yodn/node/helloNpm/hello2.txt")
// fs.writeFile('c:/Users/Administrator/Desktop/yodn/node/helloNpm/hello2.txt','+aaaaaa',{flag:'a'},function(err){
//     console.log(arguments)
// })
// var ws = fs.createWriteStream('c:/Users/Administrator/Desktop/yodn/node/helloNpm/hello2.txt',{flag:'r'})
// // ws.on("open",function () {
// //     console.log('流打开了')
// //   })//浪费，on一直存在所以用once更好
// // ws.once("open",function () {
// //     console.log('流打开了')
// // })
// ws.write('nimazhale')
// ws.write('nimazhale')
// ws.write('nimazhale') 
// ws.write('nimazhale')
// // ws.close();//close会中断写入操作用end更佳
// ws.end()

// fs.readFile('c:/Users/Administrator/Desktop/test.jpg',function(err,data){
//     //console.log(arguments)
//     if(!err){
//         console.log(data) //data二进制存储 可读取img等其他格式
//         fs.writeFile('testCopy.jpg',data,function(err){
//             if(!err){
//                 console.log('成功',__dirname,__filename)
//             }
//         })
//     }
// })
var rs=fs.createReadStream("c:/Users/Administrator/Desktop/test1.m4a")
var ws=fs.createWriteStream("c:/Users/Administrator/Desktop/test111.m4a")
rs.once("open",function(){
    console.log('可读流打开了')
    }
)
rs.once("close",function(){
    console.log('可读流关闭了')
    ws.end()
    }
)
ws.once("open",function(){
    console.log('可写流打开了')
    }
)
ws.once("close",function(){
    console.log('可写流关闭了')
    }
)
rs.on("data",function(data){
    // console.log(data.length)
    ws.write(data)
})
// rs.pipe(ws)