// Basic 
let a=10
const b=20
var c=30

// console.log(a);
// console.log(b);
// console.log(c);

// problem in scoping 
if(true)
{
    let aa=10
    const bb=20
    var cc=30
}
// console.log(aa);
// console.log(bb);
console.log(cc);

// let and const follow the scope but the var doesn't follow this hence don't use it



// nested functions
function one()
{
    const username="Madhur"

    function two()
    {
        const age=20;
        console.log(username);
    }

    two()

    // console.log(age);
}

one();


// type two of declaration of a function 
const add=function(num=20)
{
    console.log(num)
}
add(10)