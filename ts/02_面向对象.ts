//1.类（class）
class Person{
    /* 
        直接定义的属性是实例属性，需要通过对象的实例去访问；
            const per = new Person();
            per.name
        使用static的开头的属性是静态属性（类型），可以直接通过类去访问
            Person.age
        readonly 开头的属性表示一个只读的属性无法修改
    */
    
    //定义实例属性
    // name: string = '孙悟空';
    // readonly name: string = '孙悟空';
    name = '孙悟空';

    // 在属性前使用static关键字可以定义类属性（静态属性）
    // static readonly age: number = 18;
    age = 18;

    //定义方法
    /* 
        如果方法以static开头则方法就是类方法，可以直接通过类去调用
    */
    sayHello(){
        console.log("Hello 大家好！")
    }
}

//new 一个实例
const per = new Person();

console.log(per.name);
per.name = 'tom';
console.log(per.name) 

// console.log(Person.age); //static时可以使用
// Person.sayHello();//static时可以使用

per.sayHello();
//2.构造函数和this 
//constructor 被称为构造函数，会在对象创建时调用
class  Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        // 在实例方法中，this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        // console.log(this);
        this.name = name,
        this.age = age
    }

    bark(){
        alert('汪汪汪！！');
        console.log(this.name);
    }
}

const dog = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);

console.log(dog);
console.log(dog2);
dog.bark();
//3.继承
// 使用extends继承后，子类将会拥有父类所有的方法和属性
// 通过继承可以将多个类中共有的代码写在一个父类，这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
// 如果子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法。这种子类覆盖掉父类方法的形式，我们称为重写
(function (){
    // 定义一个Animal类
    class Animal{
        name: string;
        age: number;
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }

        sayHello(){
            console.log('动物在叫!!');
        }
    }

    //定义一个表示狗的类
    //使Dog类继承Animal类（此时，Animal被称为父类，Dog被称为子类）
    class Dog extends Animal{
        run(){
            console.log(`${this.name}在跑啊~~`);
        }
        
        sayHello(){
            console.log('汪汪汪!!');
        }
    }

    // 定义一个猫的类
    //使Cat类继承Animal类
    class Cat extends Animal{
        sayHello(){
            console.log('喵喵喵!!');
        }
    }

    const dog = new Dog('旺财', 5);
    const cat = new Cat('咪咪', 3);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
})();
//4.super
//在类的方法中，super表示当前类的父类（也称为超类）
//如果在子类中写了构造函数，则在子类构造函数中必须对父类的构造函数进行调用
(function () {
    class Animal{
        name: string;
        constructor(name: string){
            this.name = name;
        }
        sayHello(){
            console.log('动物在叫~~')
        }
    }

    class Dog extends Animal{

        age: number

        constructor(name: string, age: number){
            //如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
            super(name);//调用父类的构造函数
            this.age = age;
        }

        sayHello() {
            // 在类的方法中 super就表示当前类的父类
            // super.sayHello();
            console.log('汪汪汪~~')
        }
    }

    const dog = new Dog("旺财", 3);
    dog.sayHello();
})()
//5.抽象类（ts新增的）
// 以abstract 开头的类是抽象类
// 抽象类和其他类区别不大，只是不能用来创建对象
// 抽象类就是专门用来被继承的类
// 抽象类中可以添加抽象方法
// 抽象方法：抽象方法使用abstract开头，没有方法体；抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写。
~ function () {
    abstract class Animal{
        name: string;
        constructor(name: string){
            this.name = name;
        }
        // 定义一个抽象方法
        // 抽象方法使用abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello():void;
    }

    class Dog extends Animal{
        sayHello() {
            console.log('汪汪汪~~')
        }
    }

    class Cat extends Animal{
        sayHello() {
            console.log('喵喵喵~~')
        }
    }

    const dog = new Dog("旺财");
    dog.sayHello();

    // const an = new Animal();//无法创建抽象类的实例
    dog.sayHello(); 
}()
//6.接口（ts新增的）
// 接口用来定义一个类结构, 用来定义一个类中应该包含哪些属性和方法；同时接口也可以当成类型声明去使用。
// 特点
// 接口可以在定义类的时候去限制类的结构
// 接口中所有的属性都不能有实际的值
// 接口只定义对象的结构，而不考虑实际值
// 在接口中所有的方法都是抽象类
let jiekou1 = function() {
	interface myInter{
        name: string;
        
        sayHello(): void;
    }
    /* 
        定义类时，可以使类去实现一个接口
            实现接口就是使类满足接口的要求
    */
    class MyClass implements myInter{
        name: string;

        constructor(name: string){
            this.name = name;
        }

        sayHello(){
            console.log("大家好~~~");
        }
    }
}()

//同时接口也可以当成类型声明去使用
let jiekou2=function() {
    interface myInterface{
        name: string;
        age: number;
    }

    interface myInterface{
        gender: string;
    }

    const obj: myInterface = {
        name: 'sss',
        age: 111,
        gender: '男'
    };
}()


//此外，对象的类型声明还有一种方法——用别名
let jiekou3=function() {
    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    };

	const obj: myType = {
        name: 'sss',
        age: 111,
    }
}()
// 接口与抽象类类似，区别在于
// 抽象类可以有抽象方法也可以有普通方法；但接口只能有抽象方法
// 抽象类使用extends继承；接口使用implements实现

// 7.属性的封装
// 01.TS可以在类中的属性前添加属性的修饰符
// public 修饰的属性可以在任意位置访问（修改）默认值
// private 私有属性, 私有属性只能在类内部进行访问（修改）；但可以通过在类中添加方法使得私有属性可以被外部访问
// protected 受保护的属性,只能在当前类和当前类的子类中访问(修改)

// 02.js和ts封装属性的区别
// 由于属性是在对象中设置的，属性可以任意的被修改，将会导致对象中的数据变得非常不安全。因此需要对属性进行封装。
// js封装的属性存取器使用时需要调用相应的getter和setter方法；而ts封装的属性存取器使用时可直接当作变量来用就行。
// 加getter和setter方法只是为了对属性的值做判断，如果不需做判断则没必要使用。
let fengzhuang=function(){
    // 定义一个表示人的类
    class Person{
        public _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        /* 
            getter 方法来读取属性
            setter 方法来设置属性
                - 他们被称为属性的存取器
        */

       /*  js中封装的属性存取器
       // 定义方法 用来获取name属性
        getName(){
            return this._name;
        }
        //  定义方法，用来设置name属性
        setName(value: string){
            this._name = value;
        }
        getAge(){
            return this._age;
        }
        setAge(value: number){
            // 判断年龄是否合法
            if(value >= 0){
                this._age = value;
            }
        } 
        */
        // TS中设置getter方法的方式
        get name(){
            console.log('get name()执行了!!');
            return this._name;
        }
        set name(value:string){
            this._name = value;
        }
        get age(){
            return this._age;
        }
        set age(value:number){
            if(value >= 0){
                this._age = value
            }
        }
    }
    const per = new Person('孙悟空', 18);

    /* 
        js封装的属性存取器使用时需要调用相应的getter和setter方法；
        而ts封装的属性存取器使用时可直接当作变量来用就行
    */
    // per._name = '猪八戒';
    // per._age = -38;
    // per.setName('猪八戒');
    // per.setAge(-33);
    // console.log(per);
    per.name = '猪八戒';
    per.age = -13
    console.log(per);
}();
// 03.在定义类时可以直接将属性定义在构造函数中（简化代码），实际上是语法糖
    // class C{
    //     name: string;
    //     age: number;
    //     // 可以直接将属性定义在构造函数中
    //     constructor(name: string, age:number){
    //         this.name = name;
    //         this,age = age;
    //     }
    // }

    class C{
        // 语法糖
        // 可以直接将属性定义在构造函数中
        constructor(public name: string, public age:number){

        }
    }
// 08.泛型（ts新增的）
// 泛型就是不确定的类型**（定义时不确定，执行了才确定）**。在定义函数或是类时,如果遇到类型不明确就可以使用泛型。
// 在函数定义中使用
function fn<T>(a: T): T {
    return a;
}

// 可以直接调用具有泛型的函数
let result = fn(10);// 不指定泛型,TS可以自动对类型进行推断

let result2 = fn<string>('hello');//手动指定泛型


// 泛型可以同时指定多个
function fn2<T, K>(a:T, b:K):T {
    console.log(b);
    return a;
}

fn2<number, string>(123, 'hello');
// 此外，还能对泛型的类型进行限制
interface Inter{
    length: number;
}

// T extends Inter 表示泛型T必须是Inter实现类(子类)
// 这里用的话即调用该函数的参数必须具有length属性，可以是数组，字符串...
function fn3<T extends Inter>(a:T): number {
    return a.length
}

fn3('124');
// fn3(1243);
fn3({length: 10});
//在类定义中使用
class MyClass<T>{
    name: T;
    constructor(name:T){
        this.name = name;
    }
}

const mc = new MyClass<string>('孙悟空');