

// const mySym = Symbol("key1")

//  object can be declare by 2 ways
//  1. object literal
//  2. constructor (singleton)


 //++++++++ OBJECT LITERALS +++++++++//
let userInfo = {
    name: "neeraj",
    age: 21,
    email: "neerajpapa@google.com",
    "fullName":  "Neerajbhatt",
    //[mySym]: "mykey1",  /*symbol ko element ke tarah use kiya */ 
    location: "delhi",
    isLoggedIn: true

}
// console.log(userInfo);

// userInfo.greeting = "hello world" /* aise new key value add kr skte hai object me */

// userInfo.name = "himanshu"
// userInfo.score = 999
//  Object.freeze(userInfo)  /* its tp freeze the objects after this cant change any value pair of objetc */
//  userInfo.scoreSeconf = 9777
//  console.log(userInfo);
// userInfo.name = "sumit"
// console.log(userInfo["name"]);
// console.log(userInfo);

// To access any key value of this object see below //

// console.log(userInfo.age);

//+++ Another way to access element of object and this is better +++//

// console.log( userInfo["name"]);

// console.log(userInfo[mySym]);



// let userInfo = {
//     name: "neeraj",
//     age: 21,
//     email: "neerajpapa@google.com",
//     "fullName":  "Neerajbhatt",
//     // [mySym]: "mykey1",  /*symbol ko element ke tarah use kiya */ 
//     location: "delhi",
//     isLoggedIn: true

// }


userInfo.greeting = function(){
    console.log("hello world")
}

userInfo.greetingTwo = function(){
    console.log(`Hello ${this.name}`)
}

// console.log(userInfo.greeting());
// console.log(userInfo.greetingTwo());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//+++ CONSTUCTOR +++//

// const tinderUser = new Object();


// const tinderUser = {
//     tinderId: "123abc",
//     tinderName: "neeraj",
//     loggedIn: true
// }
// console.log(tinderUser['tinderId']);


// const regularUser = {
//     name: "sumit",
//     fullName: {
//         userFullName: {              //* object ke ander object bhi ho skta hai as a element *//
//             firstName: "sumit",
//             lastName: "bhati"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName.lastName);




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


const obj1 =  {1: "a", 2:"b", 3:"c"}
const obj2 =  {4: "d", 5:"e", 6:"f"}

// const obj3 = Object.assign({}, obj1, obj2) //1st way to merge 2 object//
const obj3 = {...obj1,...obj2}             //2nd way / better way to mereg 2 object//
console.log(obj3);
//++++++++++++++++++++++++++++++++++++++++++++++++//

 const users = [
     {
         name: "neeraj",
         scoreNeeraj: 1000    
     },                           // Array of objects//
     {
         name: "sumit",
         scoreSumit: 1201
     }
 ]


// console.log(users[0]["scoreNeeraj"]);
//   +++++++++++ or +++++++++++
// console.log(users[0].scoreNeeraj);



//+++++++++++++++++++++++++++++++++++++++++++++++++//

const regularUser = {
    name: "sumit",
    fullName: {
        userFullName: {            
            firstName: "sumit",
            lastName: "bhati"
        }
    }
}

// console.log(Object.keys(regularUser));
// console.log(regularUser.hasOwnProperty("fullName"));  //* hasOwnPropert is to check wheather its a property of oobjevt or not? */