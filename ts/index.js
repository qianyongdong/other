"use strict";
//1.字面量
var a1;
a1 = 10; //后面使用时不可修改，类似常量
//可以使用 | 来连接多个类型（联合类型）
var b1;
b1 = "male";
b1 = "female";
var c1;
c1 = true;
c1 = 'hello';
//2.类型断言—可以用来告诉解析器变量的实际类型
/*
语法：
    变量 as 类型
    <类型>变量
*/ var s;
var e;
e = 'hello';
s = e; //会报错，e的类型是unknown，不能直接赋值给其他变量
s = e;
s = e;
//3.void 用来表示空值，以函数为例，就表示没有返回值（或返回undefined）的函数
function fn2() {
}
//4.never 表示永远不会返回结果；没有值（比较少用，一般是用来抛出错误）
function fn3() {
    throw new Error("报错了！");
}
// 5.object
/*
    语法：{属性名：属性值，属性名：属性值}
    在属性名后面加上？，表示属性是可选的
*/
var b;
b = {}; //没有的话就会报错
b = { name: "孙悟空", age: 18 };
var c2;
c2 = { name: "猪八戒", a: 1, b: 2, c: 3 }; //会报错，多余了c
//[propName: string]: any 表示可以多余任意类型的属性
var c;
c = { name: "猪八戒", age: 18, gender: '男' };
//设置函数结构的类型声明
/*
    语法:
        (形参：类型，形参：类型...)=> 返回值
*/
var d1;
d1 = function (n1, n2) {
    return n1 + n2;
};
//6.array
/*
    数组的类型声明：
        类型[]
        Array<类型>
*/
//string[] 表示字符串数组
var e1;
e1 = ['a', 'b', 'c'];
//number[] 表示数值数组
var f;
var g;
g = [1, 2, 3];
//7.tuple（ts新增类型）
/*
    语法：[类型， 类型， 类型]
*/
var h;
h = ['hello', 123];
//8.enum（ts新增类型）枚举可以把所有可能的值都列举出来
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
//表示同时满足
var j;
j = { name: '孙悟空', age: 18 };
var k;
var l;
var m;
k = 2;
