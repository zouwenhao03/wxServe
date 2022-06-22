//接口
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//接口定义
interface testObj {
    size: number,
    value: string,
    isOk: boolean
};
function getTest(obj: testObj): string {
    if (obj) {
        let msg: string = `${obj.value}的${obj.size},${obj.isOk == true ? '合适' : '不合适'}`
        return msg
    } else {
        return msg
    }
}
let testobj1: testObj = { size: 25, value: 'shoes', isOk: false }
let msg: string = getTest(testobj1)
console.log(msg, 27)
//可选属性
interface test2obj {
    name: string,
    age: number,
    grade?: string////？指的是这个属性可有可无
}
let obj3: test2obj = { name: 'sss', age: 55 }
let obj4: test2obj = { name: 'sss', age: 56, grade: 'college' }
//只读属性
interface Point {
    readonly x: number,
    y: number
}
let point1: Point = { x: 5, y: 6 };
// point1.x = 8 error 
point1.y = 9

//函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

let mySearch2: SearchFunc;
mySearch2 = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}