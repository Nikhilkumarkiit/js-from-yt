// function  addition(number1,number2)
// {
//     console.log(number1+number2)
// }
// // const result=addition(3,5)
// console.log(result)
// yaha pe result mai value store nhi hua hai sum  ka
function  addition(number1,number2)
 {
//     let result=number1+number2
//     return result
    // console.log("nikhil")
    return number1+number2
}
const result=addition(3,5)
// console.log(result)
// yaha pe return kiya jo jakar store hua result mai return ke baad wala kabhi print nhi hota function mai
// agar return kiya to store karo phir print direct print nhi
function loginuser(username)
{
    return `${username} just logged in`
}
// console.log(loginuser("nikhil"))
// console.log(loginuser())
// yaha par print ho jayega par agar humlog "" sirf ye diye to baki msg print hoga agar kuch nhi diya to undefined print hoga
function userdetails(...num)
{
    return num
}
// console.log(userdetails(23,56,78,90))
// agar parameter mai 3 dot laga diye to wo multiple value leta hai agar 3 value hai aur tumko jada value lena hai to jiska jada value lena hai uske aage 3 dot lagao
const obj1={
    name:"nikhil",
    price:51
}
function handleobj(anyobject)
{
    console.log(`username ${anyobject.name} price is ${anyobject.price}`)
}
handleobj(obj1)
// directly object bhi bhej sakte hai bina pahale declare kiye
