const mynums=[23,45,65]
const mytotal=mynums.reduce((acc,current)=>{
    return acc+current
},0)
console.log(mytotal)