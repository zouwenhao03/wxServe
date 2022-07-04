var a = 5;
if (true) {
    let a;
    a = 3;
    console.log(a) // let 3
}
console.log(a)//var 5

var b = 6;
try {
    if (true) {
        b = 5;
        let b;
        console.log(b, 'b')//Cannot access 'b' before initialization
    }
}
catch (error) {
    console.log(error)
}

console.log(5555)


//let a = 1;
//let a = 2;//Identifier 'a' has already been declared重复声明
function func(a) {
    {
      let a;
    }
  }
  func() // 不报错

function test1(a){
   return  a == true ? tem = new Date() : tem = 'hello'
}
console.log(test1(NaN))

function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());
console.log(this,48)
console.log(globalThis)