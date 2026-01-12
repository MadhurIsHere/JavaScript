// Basic
function addTwoNumbers(number1,number2) //param
{
    console.log(number1+number2); 
}
addTwoNumbers(2,20);// args

// Return
function sub(number1=10 , number2=20) // These pre defined values will be override during the execution
{
    return number1-number2;
}
const substract=sub(1,-1)
console.log(substract);

//Rest operator -> ...variable_name returns an array

function Cart_something(item1,item2,...item) // first 2 values will go inside the item1 and 2 and rest will go inisde the item with the help of rest operator ...
{
    return item
}
console.log(Cart_something(200,300,400,500,600));

// object inside a function 
const obj={
    "Name":"Madhur Rastogi",
    "Age":20
}

function ob(any_object)
{
    return `The name is ${any_object.Name} and age is ${any_object.Age}`
}

console.log(ob(obj));

// Array inside the function
const myNewArra=[200,300,400,500]

function returnSecondVal(anyArray)
{
    return anyArray[1];
}

console.log(returnSecondVal(myNewArra));
