let arr = [1,2,3,4,5,6,7];
let a =  arr.forEach((item,index)=>{
    return item
})
console.log(a) // undefined

function getNum(arr){
    for (var i = 0 ; i < arr.length;i++) {
        return arr[i]
    } 
}
let b = getNum(arr)
console.log(b)

