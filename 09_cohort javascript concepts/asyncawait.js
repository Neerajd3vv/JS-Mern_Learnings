// ++++++ Async await +++++++++++


// function neerajFunction() {
//     return new Promise(function (resolve) {
//       resolve("hello bhai");
//     });
//   }
  
//   function callMain() {
//     neerajFunction().then(function (value) {
//       console.log(value);
//     });
//   }
//   callMain();
  
//   above explain is so hard to understand not clean at All


// now the same example with async syntax ===================>


// function neerajFunction() {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve("hello bhai");
//       },2000)
//     });
//   }
//   // its better as we now dont need to use callback, .then ka syntax//
//    async function callMain() {
//    let value =  await neerajFunction()
//    console.log(value);
   
//   }
//   callMain();


//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function neerajFunction() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("hello bhai");
      },2000)
    });
  }
  // its better as we now dont need to use callback, .then ka syntax//
   async function callMain() {
   let value =  await neerajFunction()
   console.log(value);
   
  }
  callMain();


 
