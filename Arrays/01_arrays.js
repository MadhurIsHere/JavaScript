// array

let arr2=[1,1,1,1,1,1,1,1]
// console.log(arr2);

let arr1=new Array(1,2,3,4,5,6,7)
// console.log(arr1);

// functions in array
arr1.push(9)  // add the value at the end
arr1.pop()    // remove the value from the end

arr1.unshift(-2,-1,0) // add the value in the start
arr1.shift() // removes the value from the start

console.log(arr1)

console.log(arr1.includes(19));
console.log(arr1.indexOf(1));

const arr=arr1.join();
console.log(arr1);
console.log(arr.toString());

const myNA=[1,2,3,4,5,6,7]
console.log("A -> "+myNA);

const a=myNA.slice(2,4);
console.log("B -> "+myNA);
console.log(a);

const b=myNA.splice(2,4);
console.log("C -> "+myNA);
console.log(b);
