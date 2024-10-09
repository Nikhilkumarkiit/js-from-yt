function mul(num){
return num*5
}
mul.power=3
console.log(mul(5));
console.log(mul.power);
console.log(mul.prototype);
// function bhi object hai
function createuser(username,score){
    this.username=username
    this.score=score
}
createuser.prototype.increment=function(){
    this.score++
}
createuser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai= new createuser("chai",25)
const tea= new createuser("tea",250)
chai.printMe()