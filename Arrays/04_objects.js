const tinderUser=new Object()

tinderUser.id="34b2"
tinderUser.IsLoggedIn=false
tinderUser.name="Demon"

// console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            name:{
                first:"Madhur",
                last:"Rastogi"
            }
        }
    }
}
// console.log(regularUser.fullname.userfullname.name.first);


const a={1:"x",2:"y",3:"z"}
const b={11:"a",22:"b",33:"c"}

const k={...a,...b}
// console.log(k);
// console.log();


// database 

const user =[
    {
        "id":1,
        "email":"madhur@gmail.com"
    },
    {
        "id":1,
        "email":"madhur@gmail.com"
    },
    {
        "id":1,
        "email":"madhur@gmail.com"
    },
    {
        "id":1,
        "email":"madhur@gmail.com"
    }
]

console.log(user[1].email);


// de-structure of objects
const course={
    "course":"JavaScript",
    "price":"999",
    "instructor":"Hitesh"
};

console.log(course.course);
const {instructor:i}=course
console.log(i);


// API :- appna kaam kisi aur per dalna lol
// Json
// {
//     "name":"MADHUR",
//     "COURSE":"JavaScript",
//     "price":null
// }