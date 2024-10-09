const user={
    username:"nikhil",
    logincount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log(`username:${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());
// this is a  blank object
// constructor function har barr ek naya instances deta ha jaha jo mann kare change karo original par fark nhi padta hai
function User(username,logincount,isLoggedIn){
    this.username=username
    this.logincount=logincount
    this.isLoggedIn=isLoggedIn

    // return this(likho matt likho fark nhi padta hai) implicitly define hota hai
}
// const userone=User("nikhil",12,true)
// const usertwo=User("ram",11,false)
console.log(userone)
// yaha humlog usertwo print nhi kiye hai phir bhi print karne par usertwo ka detail  mil rha hai kyuki ye userone ko overwrite kar rha hai
// isliye humlog new use karte hai jisse humlog ko instances milta hai 
const userone=new User("nikhil",12,true)
const usertwo= new User("ram",11,false)
console.log(userone)
console.log(usertwo)  