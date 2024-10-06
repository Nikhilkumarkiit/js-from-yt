// const coding=["cpp","java","python","ruby"]
// const values = coding.forEach((item)=> {
//     console.log(item)
// })
// console.log(values)
// for each value nhi return karta hai
// const mynums=[1,2,3,4,5,6,7,789]
// const newnums=mynums.filter((item) => item>4)
// const newnums1=mynums.filter((item) =>{
//     return item>4
// })
// agar curly brace use kiye to return karna padega
// console.log(newnums);
// console.log(newnums1);
const mynumb=[34,56,78,23,55]
const newnums=mynumb.map((num)=>{
    return num+10
})
// console.log(newnums)
const newnums1=mynumb.map((item)=> item*10).map((item)=>item+1).filter((item)=>item>=600)
console.log(newnums1)