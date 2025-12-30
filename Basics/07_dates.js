// Date
let myDate=new Date();
console.log(myDate); // simple date 2025-12-30T22:56:19.457Z
console.log(myDate.toString()); // Tue Dec 30 2025 22:57:10 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Tue Dec 30 2025
console.log(myDate.toJSON()); //2025-12-30T22:57:46.651Z
console.log(myDate.toLocaleDateString("en-IN")); // 30/12/2025
console.log(myDate.toLocaleTimeString('en-IN')); // 11:00:40 pm
console.log(typeof myDate);

let myCreatedDate=new Date(2025,11,31);
console.log(myCreatedDate.toDateString());

myCreatedDate=new Date(2025,11,31,4,35)  // here months starts with 0
console.log(myCreatedDate.toLocaleString()); 

myCreatedDate=new Date("12-31-2025") // here months starts with 1
console.log(myCreatedDate.toDateString());

myCreatedDate=new Date("2025-12-31") // here months starts with 1
console.log(myCreatedDate.toDateString());

let myTimeStamp= Date.now();
let time=myTimeStamp-myDate.getTime();
console.log(Math.floor(time/1000));
console.log(time);


console.log("\n");
// date =2025-12-30T23:18:00.901Z
console.log(myDate.getDate()); //30
console.log(myDate.getDay()); // week day
console.log(myDate.getFullYear()); //2025
console.log(myDate.getHours()); // 23
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes()); //18
console.log(myDate.getMonth()); //12-1=11
console.log(myDate.getSeconds());
console.log(myDate.getTime());
console.log(myDate.getTimezoneOffset()); 

