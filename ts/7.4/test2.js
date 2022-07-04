let {a,b,c} = {a:2,b:2}
console.log(a,'a',b,'b',c,'c')//2 a 2 b undefined c

let obj = {
    name:'zou',
    first:'kill',
    last:'ooo'
}
let {name:mm} = obj
console.log(mm,'mm')//zou mm

const {log} = console
log(2)
// console.log(log)
let x = 2;
let y = 3;
[x,y] = [y,x]
console.log(x,y)
