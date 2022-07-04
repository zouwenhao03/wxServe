//try catch finally
function test1() {
    try {
        return 1;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        try {
            return 2;
        }
        finally {
            return 3;
        }
    }
}
console.log(test1());
//一行代码生成随机字符串
const str = Math.random().toString(36).substring(2, 8)
console.log(str)

//交换变量
let x = 1;
let y = 2;
[x, y] = [y, x]
console.log(x, 'x===', y, 'y----')

//将字符串转为数字
let str1 = '111';
str1 = + str1
console.log(str1, typeof (str1))

//将数字转为字符串
let num1 = 555
num1 = num1 + '';
console.log(num1, typeof (num1))

//将字符串转为数组
const str2 = 'test';
str2Arr = [...str2]
console.log(str2Arr)

//可选的链接运算符 ?.
let data = { z: 111 }
console.log(data?.w, data?.z)
/*
eval() 是全局对象的一个函数属性。

eval() 的参数是一个字符串。如果字符串表示的是表达式，eval() 会对表达式进行求值。如果参数表示一个或多个 JavaScript 语句，那么eval() 就会执行这些语句。不需要用 eval() 来执行一个算术表达式：因为 JavaScript 可以自动为算术表达式求值。

如果你以字符串的形式构造了算术表达式，那么可以在后面用 eval()对它求值。例如，假设你有一个变量 x，您可以通过将表达式的字符串值（例如 3 * x + 2）赋值给一个变量，然后在你的代码后面的其他地方调用 eval()，来推迟涉及 x 的表达式的求值。

如果 eval() 的参数不是字符串， eval() 会将参数原封不动地返回。在下面的例子中，String 构造器被指定，而 eval() 返回了 String 对象而不是执行字符串。
*/

var greeting = 'My name is ${name}, age ${age}, I am a ${job.jobName}';
var employee = {
    name: 'XiaoMing',
    age: 11,
    job: {
        jobName: 'designer',
        jobLevel: 'senior'
    }
};
// String.prototype.render = function (obj) {
//     // 利用了ES6的解构、对象keys新方法，在函数内部解构并自动展开变量
//     eval(`var {${Object.keys(obj).join(',')}} = obj`)
//     // 利用eval使字符串直接作为ES6解析
//     return eval('`' + this + '`')
// }

String.prototype.render = function (obj) {
    with (obj) {
        return eval('`' + this + '`')
    }
}

var result = greeting.render(employee);
console.log(result);