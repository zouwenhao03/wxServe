class EventBus {
    // 定义所有事件列表,此时需要修改格式：
    // // {
    //   key: {
    //     D+id: Function,
    //     id: Function
    //   },
    //   key: Object,
    // } 
    // Array存储的是注册的回调函数
    constructor() {
        this.eventObj = {}; // 用于存储所有订阅事件
        this.callbcakId = 0; // 每个函数的ID
    }
    // 订阅事件,类似监听事件$on('key',()=>{})
    $on(name, callbcak) {
        // 判断是否存储过
        if (!this.eventObj[name]) {
            this.eventObj[name] = {};
        }
        // 定义当前回调函数id
        const id = this.callbcakId++;
        this.eventObj[name][id] = callbcak; // 以键值对的形式存储回调函数
        return id; // 将id返回出去，可以利用该id取消订阅
    }
    // 发布事件,类似于触发事件$emit('key')
    $emit(name, ...args) {
        // 获取存储的事件回调函数数组
        const eventList = this.eventObj[name];
        // 执行所有回调函数且传入参数
        for (const id in eventList) {
            eventList[id](...args);
            // 如果是订阅一次，则删除
            if (id.indexOf('D') !== -1) {
                delete eventList[id];
            }
        }
    }
    // 取消订阅函数，类似于$off('key1', id)
    $off(name, id) {
        console.log(this.eventObj)
        // 删除存储在事件列表中的该事件
        delete this.eventObj[name][id];
        console.info(`${id}id事件已被取消订阅`)
        // 如果这是最后一个订阅者，则删除整个对象
        if (!Object.keys(this.eventObj[name]).length) {
            delete this.eventObj[name];
        }
    }
    // 订阅事件，只会执行一次，为了方便，id上直接加上一个标识d
    $once(name, callbcak) {
        // 判断是否存储过
        if (!this.eventObj[name]) {
            this.eventObj[name] = {};
        }
        // 定义当前回调函数id,添加D则代表只执行一次
        const id = "D" + this.callbcakId++;
        this.eventObj[name][id] = callbcak; // 以键值对的形式存储回调函数
        return id; // 将id返回出去，可以利用该id取消订阅
    }
}
// 初始化EventBus
let EB = new EventBus();


// 订阅事件
EB.$on('key1', (name, age) => {
    console.info("我是订阅事件A:", name, age);
})
EB.$once("key1", (name, age) => {
    console.info("我是订阅事件B:", name, age);
})
EB.$on("key2", (name) => {
    console.info("我是订阅事件C:", name);
})


// 发布事件key1
EB.$emit('key1', "小猪课堂", 26);
console.info("在触发一次key1")
EB.$emit('key1', "小猪课堂", 26);
// 发布事件
EB.$emit('key2', "小猪课堂");

//数组合并
const apples = ["🍎", "🍏"];
const fruits = [...apples, "🥭", "🍌", "🍒"];
console.log(fruits); // ["🍎", "🍏", "🥭", "🍌", "🍒"];


//数组中取值
const arr2 = ['jack', 'tom', 'lili'];
const [tom, jack] = arr2;
console.log(tom, jack) //jack tom

const arr3 = [1,[2,3],4,5]
console.log(...arr3,'arr3')
console.log(arr3.flat(),'arr3-2')//数组扁平化

//对象取值 对象解构
const user = {
    name: "DevPoint",
    age: 30,
};
let { name, age } = user;
console.log(name, age) //jack tom
const obj = {
    a: 1,
    b: 2,
    c: 3
}
const { c, a: d } = obj
console.log(c, 'c')//3
console.log(d, 'd')//原对象上没有存在d，可以指定d为原对象的某个属性名

//嵌套对象取值
let obj2 = {
    part1: {
      name2: '零一',
      age1: 23
    }
  }
const {part1:{name2:a1,age1}} = obj2
console.log(a1,'嵌套对象取值')





//数组循环
const fruits1 = ["🍉", "🍊", "🍇", "🍎"];
// for(let i = 0; i<fruits1.length;i++){
//     console.log(fruits1[i])
// }
for (fruit of fruits) {
    console.log(fruit);
}


var arr = ['nick', 'freddy', 'mike', 'james', { name: '111' }];
arr.name = "数组";
arr[5] = '222'


for (var key in arr) {
    console.log(key + ': ' + arr[key]);
}
console.log('-----------分割线-----------');
for (var item of arr) {
    console.log(item);
}
console.log(arr["name"], 222222)
console.log(arr)

//数组搜索
const inventory = [
    { name: "Bananas", quantity: 5 },
    { name: "Apples", quantity: 10 },
    { name: "Grapes", quantity: 2 },
];

function getQuan(name) {
    return inventory.filter(item => item.name == name)
}
console.log(getQuan('Apples'))

//对象合并
const employee = { name: "DevPoint", age: 30 };
const salary = { grade: "A" };
const sum = { ...employee, ...salary };
console.log(sum)

//查找日期位于第几天
const dayOfYear = (date) =>
    Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

let now = dayOfYear(new Date());
console.log(now)


//计算2个日期之间相差多少天
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

let res = dayDif(new Date("2022-6-21"), new Date("1994-03-29"))
console.log(res)

//打乱数组
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

console.log(shuffleArray([1, 2, 3, 4]));


//
const a = [1, 2, 3];
const b = [1, 5, 6];
let e = [...a, ...b]
//模板字符串可以进行运算
const name1 = '小明';
const score = 59;
console.log(`${name1}的成绩是${score},${score > 60 ? '及格了' : '不及格'}`)

//es6输入判断非空
console.log((a !== null || a !== undefined || a !== '') == ((a ?? '') !== ''), 190)


//数组扁平化
const deps = {
    '采购部': [1, 2, 3],
    '人事部': [5, 8, 12],
    '行政部': [5, 14, 79],
    '运输部': [3, 64, 105],
}
let member = Object.values(deps).flat(Infinity)
console.log(member, 'member')

//
const fn1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1------')
        }, 500)
    })
}
const fn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('2-----')
        }, 300)
    })
}
const fn = async () => {
    let res1 = await fn1();
    let res2 = await fn2();
    console.log(res1,'res1')
    console.log(res2,'res2')
}
fn()
//promise all
const fn3 =async()=>{
    Promise.all([fn1(),fn2()]).then(res=>{
        console.log(res,'res-all')
    })
}
fn3()
// promise race
const fn4 = async()=>{
    Promise.race([fn1(),fn2()]).then(res=>{
        console.log(res,'res-race')
    })
}
fn4()

function test(a) {
    return new Promise((resolve, reject) => {
        if (a) {
            console.log(111)
            resolve(1)
        } else (
            reject(2)
        )
    })
}

test(1)
    .then(res => {
        console.log(res, 222)
    })
    .catch(err => {
        console.log(err, 333)
    })