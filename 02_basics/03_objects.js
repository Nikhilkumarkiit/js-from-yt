// sigleton
const mysym=Symbol("nikhil")
const jsuser={
    name:"nikhil",
    [mysym]: "hello",
    age:20,
    email:"kk@gamil.com",
    location:"BBSR"
}
// console.log(jsuser.name)
// console.log(jsuser["name"])
// console.log(typeof jsuser[mysym])
// behind the scene name is string
jsuser.name="ram"
// console.log(jsuser.name)
// Object.freeze(jsuser)
jsuser.name="sita"
// console.log(jsuser.name)
// console.log(jsuser)
// after freezing no change are made
jsuser.greeting=function()
{
    console.log("hello");
}
console.log(jsuser.greeting)
jsuser.greeting2=function(){
    console.log(`my name is ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())