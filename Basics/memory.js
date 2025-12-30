// Stack --> Primitive 
// we get a copy whenever we made a change in the value

// Heap --> Non-Primitive
// we don't get a copy here instead the value is changed via reference 

let a="Madhur Rastogi"
let b=a
// the change is made in the copy not the original 
a="MadhurIsHere"
console.log(a);
console.log(b);


let UserOne={
    email: "madhur@google.com",
    upi: "google@ybl"
}
let UserTwo=UserOne
// the change is made in the original
UserTwo.email="madhurrastogi@google.com"

console.log(UserOne.email);
console.log(UserTwo.email);


