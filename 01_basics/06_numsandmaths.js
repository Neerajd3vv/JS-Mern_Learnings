// const score = 100
// console.log(score);
// console.log(typeof score);

// console.log(parseInt(3.14));
// console.log(parseFloat(3.14));
// console.log(parseInt('42'));       //=> parseInt is a global function in js
// console.log(parseInt('56fodfo'));


const age = new Number(100)
console.log(age.toString());
console.log(typeof age);
console.log(age.toFixed(2));


let otherNumber = 122.77
console.log(otherNumber.toPrecision(4)); /* round off krta hai priority ute digit ko dega jitan type kiya hai im our ex (3), to first 3 digit rou offf hogi*/

// let score = 1000000
// console.log(score.toLocaleString());

// +++++++++++++++++++++  Maths  +++++++++++++++++++++ //

// console.log(Math.abs(-6));
// console.log(Math.round(43.7));
// console.log(Math.floor(5.8));
// console.log(Math.ceil(5.2));
// console.log(Math.min(5, 6, 1, 0));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));node .\01_basics\06_numsandmaths.js


// console.log(Math.floor(Math.random() * 10) + 1); 

let min = 1 
let max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min );


// let min = 4
// let max = 8

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);