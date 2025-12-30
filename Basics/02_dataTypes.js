"use strict";


// Data Types in JavaScript

// 1. Primitive Data Types
// Number, String ,Boolean , Null ,undefined, Symbol, BigInt
// a) Number
const age = 25;
const price = 99.99;

// b) String
let firstName = "John";
let lastName = 'Doe';

// c) Boolean
var isActive = true;
var isVerified = false;

// d) Undefined
let middleName; // value is undefined

// e) Null
let address = null; // explicitly set to null

// f) Symbol
const uniqueId = Symbol('id');
const id=Symbol('123')
const newId=Symbol('123');
console.log(id===newId);
console.log(id);
console.log(newId);

// g) BigInt
const bigNumber = BigInt(9007199254740991);

// 2. Non-Primitive Data Types / Reference Type

// a) Object
console.log(typeof address) // null is of object type in js
console.log(typeof middleName) // undefined is of undefined type in js
let myObj={
    name:"Madhur",
    age:20,
    gender:"Male",
}
console.log(myObj);

// b) Arrays
const heros=["Iron Man","Spider Man","Super Man"];
console.log(heros);


// c) Functions
const myFun=function(){
    console.log("Hello World");
}