const coding=["cpp","java","python","ruby"]
coding.forEach( function(val){
    // console.log(val)
  
})
// call back use kar rha hai call back mai naam nhi hota function ka
coding.forEach( (val)=>{
    // console.log(val)
})
// ye bhi call back kar rha hai functon par arrow function use karke
function printme(val)
{
    // console.log(val)
}
coding.forEach(printme)
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})
const mycoding=[
    {
        languagename:'c++',
        languagefile:".cpp"

    },
    {
        languagename:'javascript',
        languagefile:".js"

    },
    {
        languagename:'phyton',
        languagefile:".py"

    },
]
mycoding.forEach((item)=>{
    console.log(item.languagefile)
})