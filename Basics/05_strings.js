const name="Madhur"
const surName="Rastogi"
const fullName=new String(" Madhur Rastogi");

console.log(fullName.replaceAll('a','B'));
console.log(fullName.__proto__);
console.log(fullName.length);
console.log(fullName.charAt(2));
console.log(fullName.indexOf("s"));
console.log(fullName.charCodeAt(9)) //s
console.log(fullName.charCodeAt(10)) //t-> unicode value
console.log(fullName.codePointAt(9))
console.log(fullName.codePointAt(10));

console.log(fullName.split(" "));
console.log(fullName.slice(-10,-2));

console.log(fullName.trim());
console.log(fullName.includes(" "));

console.log(fullName.blink());
console.log(fullName.bold());


// console.log(name+" "+surName);
// console.log(`Hey my name is ${name} ${surName} `)
