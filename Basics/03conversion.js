let score="22"
console.log(typeof score);

let valueInNumber=Number(score);
console.log(typeof(valueInNumber));
console.log(typeof NaN)
console.log("\n");
let score2="22dhfs"
let convert=Number(score2);
console.log(score2)
console.log(convert)
console.log("\n");
console.log(typeof convert)
console.log(typeof score2)
/*
NaN stands for Not a number but still its type is number 
why because when we try to convert a non-numeric string into a number
it results in NaN.

String to number =NaN
Boolean to number = 0 or 1
Null to number =0
Undefined to number =NaN 

String to boolean =true;
Empty string to boolean =false
Number 0 to boolean =false else all are true;

The type is number 
But the class is Number 

For all primitive data types this type of conversion is possible
but for object data types this conversion is not possible
*/
 