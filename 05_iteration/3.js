// const coding=["cpp","java","python","ruby"]
// const values = coding.forEach((item)=> {
//     console.log(item)
// })
// console.log(values)
// for each value nhi return karta hai
const mynums=[1,2,3,4,5,6,7,789]
const newnums=mynums.filter((item) => item>4)
const newnums1=mynums.filter((item) =>{
    return item>4
})
// agar curly brace use kiye to return karna padega
console.log(newnums);
console.log(newnums1);