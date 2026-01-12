const marvel_heroes=["spiderman","iron man","thor"]
const dc_heros=["superman","flash","batman"]

// marvel_heroes.push(dc_heros)
// console.log(marvel_heroes);

const all_heroes=marvel_heroes.concat(dc_heros)
console.log(all_heroes);

//spread 
const all_new_heroes=[...dc_heros,...marvel_heroes]
console.log(all_new_heroes);


const another_arr=[1,2,3,[4,5,6],7,[8,9,[10,11]]]

const real_another_way=another_arr.flat(Infinity)
console.log(another_arr);
console.log(real_another_way);

console.log(Array.from("Madhur"))
console.log(Array.from({
    name:"Madhur",
    age:20
}));

let a=100
let b=200
let c=300
console.log(Array.of(a,b,c));
