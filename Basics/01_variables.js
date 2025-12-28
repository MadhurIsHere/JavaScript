const accountId=142534
let accountName="MadhurRastogi"
var accountEmail="Madhur@google.com"
accountCity="Mumbai"

console.log(accountId)
/*

Never use var to declare variables as this doesn't follow block space and may create bugs in code
also const works like final in java and once assigned value it cannot be changed later
let is used to declare variables whose values can be changed later and is safe to use as it follows block and function scope

*/
console.table([accountId,accountName,accountEmail,accountCity])