const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('asyn task is complete')
        resolve()
    },1000)
})
promiseone.then(function(){
    console.log("promise consumed");
})
 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asyn task 2");
        resolve()
    },1000)
 }).then (function(){
    console.log("promise 2 consumed");
 })
 const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chaai",email:"chai@example.com"})
    },1000)
 })
 promise3.then(function(user){
    console.log(user);
 })
 const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"nikhil",password:"123"})
        }else{
            reject('ERROR:something went wrong')
        }
    },1000)
 })
 promise4.then(function(user){
    console.log(user);
    return user.username
 }).then((username)=>{
    console.log(username);
 }).catch(function(error){
    console.log(error)
 }).finally(function(){
    console.log("the promise is either resolved or rejected")
 })
 const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        }else{
            reject('ERROR:js went wrong')
        }
    },1000)
 })