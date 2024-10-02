// for of
const arr=[2,3,4,9,7]
for(const i of arr)
{
    // console.log(i);
}
// MAPS
const map=new Map()

map.set('IN',"India")
map.set('USA',"America")
map.set('UK',"united kingdom")
// console.log(map)
// for(const j of map)
// {
//     console.log(j)
// }
for(const [j,k]of map)
{
    // console.log(j,"refers to",k)
}
// yaha destructure hua hai map ka key value alg alg print hoga 
const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
// object mai for of nhi for in loop chalt hai
for(const p in myobj)
{
    console.log(`${p} shotcut is for ${myobj[p]}`)
}
const prog=["js","rb","py","java"]
for(const key in prog)
{
    console.log(prog[key])
}
// for in key deta hai aur map ke liye kaam nhi karta hai
