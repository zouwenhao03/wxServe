//ts支持js几乎相同的数据类型，还提供了枚举类型
//声明（const/var/let) 变量名 ： 类型 = 变量值

//1.Bool
let isOk:boolean = true;

//2.number
let num:number = 6;

//3.string
let str3:string = 'test';

//4.arrary
//4.1 TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let list:number[] = [1,2,3,4,num]//数字型数组
let list2:string[] = ['aa','bb','cc',str3]; //字符串数组
let list4:boolean[] = [true,false]
let list3:any[] = [1,'w',true,[4,5]]//任意型数组
//4.2 第二种方式是使用数组泛型，Array<元素类型>：
let list5:Array<number> = [1,2,3];

//5.tuple 元组
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组
let list6:[string,number];
list6 = ['aaa',6] // error list6 = [6,'sss']

let list7:Array<string|number> = [1,2,3,'s']//定义list7元组可以为字符串或者是number类型
list7[5] = 2222

//6.enum 枚举
///enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
enum Color {Red = 1,Green,Blue};
let C:Color = Color.Green;
//或者，全部都采用手动赋值：
enum Color {Yellow = 2,Black = 3,Orange = 4};
let D:Color = Color.Yellow

//7.any 任意类型
let notSure:any = 5;

//8. void
//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
    console.log("This is my warning message");
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

//9. null和undefined 
//默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
//然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined
let u:undefined = undefined;
let n:null = null

//10. never 
//never类型表示的是那些永不存在的值的类型。
//never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

//11.object
//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
 //使用object类型，就可以更好的表示像Object.create这样的API。
 declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

//类型断言

//类型断言有两种形式。 其一是“尖括号”语法：
let someValue:any = 'this is a string';
let strLength:number = (<string>someValue).length

//另一个为as语法：
let someVal:any = 'this is another string';
let strLen:number = (someVal as string).length