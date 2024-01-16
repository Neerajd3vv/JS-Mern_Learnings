let name = 'neeraj'
let repoCount = 6
// console.log(`my name is ${name} my repo count is ${repoCount}`); /* its called string interpolation*/

// another way to write strings

// const userName = new String ("neeraj")

// console.log(userName.toUpperCase());
// console.log(typeof userName);


let gameName = new String("neerajbaingan")
// console.log(gameName.indexOf("b"));
// console.log(gameName.charAt(6));

// let anotherGameName = gameName.substring(0,7)
// console.log(anotherGameName);

let anotherGameName = gameName.slice(-12,7)
// console.log(anotherGameName);

// let newString = "    paplu    "
// console.log(newString);
// console.log(newString.trim());
// console.log(newString.trimEnd());

let url = "https://neeraj-repo.com/neerajbhatt"
console.log(url);
console.log(url.replace("neerajbhatt", "neeraj-bhatt"));
console.log(url.includes("sumit"));  /* inculdes is to find keyword in our url */


 let userName = "neeraj-bhatt-uchiha"
 console.log(userName.split("-"));   /* this method is toocnvert it into funtion*/

let gameFame  = "himanshu"
console.log(gameFame.substring(2,6));