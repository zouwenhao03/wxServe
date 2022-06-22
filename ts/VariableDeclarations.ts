//变量声明
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}

for (var i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}

//let 
//当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的

function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}

//拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写。 虽然这些变量始终“存在”于它们的作用域里，但在直到声明它的代码之前的区域都属于 暂时性死区。 它只是用来说明我们不能在 let语句之前访问它们，幸运的是TypeScript可以告诉我们这些信息。

//解构
let input = [1,2];
let [first,second] = input;
console.log(first,second);
