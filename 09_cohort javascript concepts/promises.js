

//+++++++++++++ ugly way to right your asyn function //+++++++++++++++++

//  const { promises } = require("dns");
// const fs = require("fs");

//  function neerajReadFile(cb){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         cb(data)
//     })
//  }

// function onDone(data){
//  console.log(data);
// }
 
//  neerajReadFile(onDone) 

//  +++++++++ cleaner way by using promise +++++++++
// const fs = require("fs");
// function neerajReadFile (){
//     return new Promise(function(resolve){
//      fs.readFile("a.txt", "utf-8",function(err, data){
//          resolve(data)
//      })
//     })
// }
// function onDone(data){
//   console.log(data);
// }

// neerajReadFile().then(onDone)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++ WHAT IS Promise?? ++++++++++++
// Its just a class such as date 

const pr = new Promise(function(resolve){
  resolve("haan bhai kya baat?")
})

function returnMine(pr){
 console.log(pr);
}

pr.then(returnMine)
console.log(pr);

// here is the simple promise that immediately resolves//

// let p = new Promise(function(resolve){
//     resolve("resolve got return")
// })

// p.then(function(resolvevalue){
//     console.log(resolvevalue); 
// })
// +++++++++ another ex of promise ++++++++
// function neerajTimeout (){
//     return new Promise(function(resolve){
//          setTimeout(resolve , 2000)
//     })
// }
// function print (){
// console.log("hi there");
// }
// neerajTimeout().then(print)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function promisifedTimeout (duration){
//  return new Promise(function(resolve){
//     setTimeout(resolve, duration)
//  })
// }

// promisifedTimeout(1000).then(function(){
//     console.log("first");                        
//     promisifedTimeout(2000).then(function(){
//         console.log("second");
//         promisifedTimeout(3000).then(function(){
//             console.log("third");
            
//      })

//    })
// })

//  what is this it's still a callback hell,but promises uses to stop this what now? //

// we use promise chaning to stop this looks like this


// function promisifedTimeout (duration){
//     return new Promise(function(resolve){
//        setTimeout(resolve, duration)
//     })
//    }
   
//    promisifedTimeout(1000).then(function(){
//        console.log("first");                        
//        promisifedTimeout(2000)
          
//    }).then(function(){
//     console.log("second");
//    }).then(function(){
//     console.log("second");
//    }).then(function(){
//     console.log("third");
//    })