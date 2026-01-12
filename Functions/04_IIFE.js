// Immediately Invoked Function Expressions (IIFE)

(function one(){
    console.log("DB connected one");
})();

(()=>{
    console.log("DB connected in arrow function");
})();