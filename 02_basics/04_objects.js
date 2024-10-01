 const web1={}
//  non-singleton
const web2=new Object()
// singleton
const tinderuser={}
tinderuser.name="nikhil"
tinderuser.id="123erf"
// console.log(tinderuser)
 const regular={
    email:"kk@gmail.com",
    fullname:{
        username:{
            firstname:"nikhil",
            lastname:"kumar"
        }
    }
 }
//  console.log(regular.fullname)
//  console.log(regular.fullname.username.firstname)
 const obj1={1:"a", 2:"b"}
 const obj2={3:"g",4:"p"}  
//  const obj3={obj1,obj2}
//  aise direct karne se ye hoga ki tum obj ke andar obj bana doge
//  console.log(obj3)
const obj_3=Object.assign({},obj1,obj2)
// ek saath ho jayega par ek obj ke andar ek nhi hoga
console.log(obj_3)
const obj3_2={...obj1,...obj2}
// spread technique
// console.log(obj3_2)
// console.log(Object.values(tinderuser))
// console.log(Object.keys(tinderuser))
// console.log(Object.entries(tinderuser))
const course={
    course_name:"js",
    fees:"zero",
    teacher:"hitesh"
}
// const {teacher:t}=course
// const {teacher}=course
// console.log(t)
// both the above symbol are used to destructure

 