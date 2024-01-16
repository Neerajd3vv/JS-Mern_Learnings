
// function findSum (n){
//     let startNum = 0
//     for( let i = 0; i < n; i++){
//         startNum = startNum + i
       
        
//   }
//   return startNum
//}
// const OutputMy = findSum(100)
  // or can be called  in following way --->>

// console.log(findSum(100));
// ++++++++ 2types of asyn fun for now ++++++++
// following one is ===>> setTimeout//
// console.log("hello neeraj");

function findSum (n){
    let startNum = 0
    for( let i = 0; i < n; i++){
        startNum = startNum + i
        
        
  }
  return startNum
}



function anotherFunction (){
    console.log(findSum(100));
}

setTimeout(anotherFunction , 2000)

console.log("hello before function in execution");

// above function can be written as ==>>

// function findSum (n){
//     let startNum = 0
//     for( let i = 0; i < n; i++){
//         startNum = startNum + i
       
        
//   }
//   console.log(startNum);
// }

// function anotherFunction (){
//    return  findSum(100)
// }

// setTimeout(anotherFunction , 2000)

// console.log("hello before function in execution");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FOLLOWING ONE IS READFILE//

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// // not working here in my vscode so ran it on replit

