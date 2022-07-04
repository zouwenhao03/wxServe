//函数类型
//           参数类型           返回值类型
function add(x:number,y:number):number{
    return x+y
}
//函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 我们也可以这么写：
let myAdd: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };

let myadd = function(x:number,y:number):number{
    return x + y
}

//函数的可选参数和默认参数
//TypeScript里的每个函数参数都是必须的。 这不是指不能传递 null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
//JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能
function getFullName(firstName:string,lastName?:string):string{
    let fullName:string    
    if(firstName||lastName){
    return  fullName = firstName + lastName
    }else{
        return firstName
    }
}
//可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。

//默认参数
function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName2("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName2("Bob", undefined);       // still works, also returns "Bob Smith"
//let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right

//与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。 
function getFullName1(firstName ='Will',lastName:string):string{
      let fullName:string = firstName + lastName
      return fullName
}
getFullName1('kill','zou');
getFullName1(undefined,'lll');//必须明确的传入 undefined值来获得默认值。

//剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
function getFullName2(firstName:string,...lastName:string[]):string{
    let fullName:string
    return fullName = firstName + '' + lastName.join('')
}
let fullName1 = getFullName2('aaa','bbb','ccc','ddd');
console.log(fullName1)//aaabbbcccddd
let fullName2 = getFullName2('aaa')
console.log(fullName2)//aaa
console.log(this)