console.log(2 + "1");
console.log(1 + "2");
console.log("1" + 1 + 1 + 1);  // treated as string 
console.log(1+"1"+1+1); // treated as string
console.log(1+1+"1"+1); // first add 1+1=2 then treated rest as string

//************************************Comparison Operators*************************************/
console.table([null == 0,null === 0,null > 0,null < 0," ",undefined == 0,undefined === 0,undefined >= 0,undefined <= 0,undefined> 0,undefined < 0]);
console.table([null >= 0,null <= 0]);