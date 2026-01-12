const user={
    "username":"Madhur",
    "Age":20,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Kunal"
// user.welcomeMessage()

const f=function(){
    console.log(this);
}
// f()

// Arrow Function 
const arrow=()=>{
    return "I learn Arrow Functions"
}

// console.log(arrow());

const addTwo=(num1,num2)=>{
    console.log(num1,num2);
}

// addTwo(20,30)

const add2=(num1,num2)=> num1+num2;
console.log(add2(2,3));
