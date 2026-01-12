// singleton 
// Object.create
// objects created by constructors are singleton 


// object literals
const mySym=Symbol("key1")

const jsUser={
    "name":"Madhur",
    [mySym]:"mykey1",
    "age":20,
    "email":"madhur@google.com",
    "isLoggedIn":false,
    "lastLoginDays":["Monday","Tuesday"]
};

jsUser.f=function()
{
    console.log("hello");
    return "done";
}

console.log(jsUser.f);
console.log(jsUser.f());

jsUser.greeting=function ()
{
    console.log(`Hello JS user, ${this.name}`);
    return "done";
}

console.log(jsUser.greeting());

console.log(jsUser["email"]);
console.log(jsUser.email);

console.log(jsUser[mySym]);

// jsUser.age=21
// Object.freeze(jsUser)
// jsUser.age=22
// jsUser.name="Madhur Rastogi"
// console.log(jsUser);


console.log(jsUser);

