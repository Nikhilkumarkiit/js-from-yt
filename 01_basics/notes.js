// primitive=iska copy value jata hai na ki real
//  7 types : string,number,boolean,null,undefined,symbol,bigInt

// Reference(non primitive)
//  array objects
const id = Symbol("123")
const id2 = Symbol("123")
console.log(id===id2)

const heros=["ram","laxman","bharat"]
let myobj={
    name:"nikhil",
    age:21,
}
const myfun=function(){
    console.log("hello world");
}
// non primitive ka type object ata hai function ka function object ata hai

//  MEMORY
//  stack(primitive),heap(non-primitive)
let user1={
    email:"kk@gmail.com",
    upii:"ram@ybl"
}
let user2=user1
user2.email="nk@gmail.com"
console.log(user1)
console.log(user2)
// object non primitive hai uska value reference se pass hota hai to change nhi hota hai original milta hai
// primitive value ka value copy jata hai jo update hota hai copy milta hai


