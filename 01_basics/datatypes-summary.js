//  So on the bases of how data store to the memory and how we access data 
//  Dataypes are  divided into TWO MAJOR CATEGORY 
//  1. primitive , 2.refrence .

// PRIMITIVE TYPE//

// types - strings, number, Boolean, null, undefined, BigInt, Symbol,

const id = Symbol('123')
const anotherId = Symbol('123') /* symbol used to make value unique */
console.log(id === anotherId);
// const bigNumber = 3434234234n

//REFERENCE TYPE//
// types - array, objects, functions.

// let heros = ["ironman", "hulk", "pop", 2]
// // heros[4] = "hellcat";

// console.log(typeof heros);

// let aboutMe = {
//     name: "neeraj",
//     age: 21
// }
// console.log(aboutMe);

// function greet (name, lastNAme){
// console.log( "hello" + name + lastNAme)
// }
// greet(" neeraj", " bhatt");
// console.log(typeof greet);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// topic- memory

// Stack (primitive) ,  Heap(refrence). //
/* visual representation of this in my pc ss */

// let name = "neeraj"
// let nameTwo = name
// nameTwo = "sumit"
// console.log(nameTwo);
// console.log(name);


let userInfo = {
    name: "neeraj",
    age: 21
   
}
let userInfoTwo = userInfo
userInfoTwo.age = 30
userInfoTwo.name = "sumit"
console.log(userInfo);
console.log(userInfoTwo);