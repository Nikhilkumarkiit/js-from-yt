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


