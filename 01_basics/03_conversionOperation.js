let age = "neeraj"

let valueInNumber= Number(age)
// console.log(typeof valueInNumber);
// console.log( valueInNumber);

// conversion kya convert hota hai or fir output kay aata hai
// "33" => 33 will be output , or ye number me convert ho jyga
// "33abc" => output NaN(not an number), or ye number me convert ho jyga
// null => 0 output hoga , or ye number me convert ho jyga
// undefined => NaN hoga , or ye number me convert ho jyga
// "neeraj" => agar koi aise string hai jo number me convert nhi ho skta jaise "neeraj", to output NaN, and but convert ho jyga 
// true/false => 1, 0 output hoga,or ye number me convert ho jyga

let loggedIn = 'neeraj'

let bolleanIn = Boolean(loggedIn)
// console.log(typeof bolleanIn)
// console.log(bolleanIn);

// 1 => true
// 0 => false
// "" => false
// "neeraj" => true

let someNumber = 21
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

// 21 => output will be 21 onyl but datattype has changed to string.

/***************  operations *****************/

// console.log(2*3);
// console.log(2+1);
// console.log(4-1);
// console.log(4/2);
// console.log(4%2);
// console.log(2**4);

// let score = 40
// let negScore = -score
// console.log(negScore);

 console.log("1" +  (3 + 2) + "2");  /* play with it if you forget what is this for */

let str1 = "Hello"
let str2 = " Neeraj"

let str3 = (str1 + str2)
// console.log(str3);

let gameScore = 100
const playerScore = gameScore++  /* prefix and postfix opertaors topic imp** */
// console.log(playerScore)