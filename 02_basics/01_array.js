const array=[2,4,6,7,8,"nikhil"]
// console.log(array[0])
const myarr=new Array(2,5,"nikhil",9)
// console.log(myarr[2])
myarr.push(19)
myarr.push(23)
// console.log(myarr)
myarr.pop()
// console.log(myarr)
// myarr.unshift(7) add 7 at starting and myarr.shift() remove from front
// console.log(myarr.includes(24))
// console.log(myarr.indexOf(24))
const myarray=myarr.join()
// console.log(myarr)
// console.log(myarray)
// join change array to string data types 
// slice se part ata hai par splice mai or iginal se bhi hatt jata hai aur last value bhi rahta hai
const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
const newlist =marvel_heros.concat(dc_heros)
// console.log(newlist)
const all_herolist=[...marvel_heros,...dc_heros]
// console.log(all_herolist)
// spread ... ko use karne mai ye fayada hai ki 2 se jayada concat kar sakte hai
const another_array=[1,3,4,5,[3,7,9],[89,90,79]]
const nanother_array=another_array.flat(Infinity)
// console.log(nanother_array)
// flat ek saath concat kar deta hai
let score0=345
let score1=678
let score2=987
// console.log(Array.of(score0,score1,score2))