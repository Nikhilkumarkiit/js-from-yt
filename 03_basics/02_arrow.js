const user={
    username:"nikhil",
    price:999,
    welcomemessage:function(){
        // console.log(`${this.username},welcome to website`)
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// const chai=function(){
//     let username="nikhil"
//     console.log(this.username)
// }
// chai()
// this ka use function mai nhi object mai karo current ko access karne ke liye
const addtwo = (num1,num2) => {
    return num1+num2
}
console.log(addtwo(3,4))
// const Addtwo = (num1,num2) => 
//     num1+num2    implicit declaration
// curly braces nhi diye to return bhi mtt dena

console.log(addtwo(3,4))
const exam=(num1,num2) => ({username:"hitesh"})
// object ke liye hamesha curly braces