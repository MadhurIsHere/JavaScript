/********************************Numbers***********************************/
const a=new Number(1000000000)
console.log(a.toString().length);

console.log(Number.MAX_VALUE)
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);

const hundred=10000000
console.log(hundred.toLocaleString('en-IN'));

const b=132.31231
console.log(b.toPrecision(5)); // total numeber of digits in the number should be given as argument
console.log(b.toFixed(2))  // digits after decimal

/************************************Mathematics************************************ */
console.log(Math);
console.log(Math.abs(-232));
console.log(Math.sqrt(813));
console.log(Math.cbrt(81));
console.log(Math.max(131,23));
console.log(Math.min(131,212));
console.log(Math.sin(19));
console.log(Math.PI);
console.log(Math.log(16));
console.log(Math.exp(6));
console.log(Math.pow(2,3));
console.log(Math.round(802.2131));
console.log(Math.ceil(621.4));
console.log(Math.floor(383.6));
console.log(Math.floor((Math.random()*10)+1)+10);
