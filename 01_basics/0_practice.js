// const userName = "neeraj"

// let myArray = [1,2,3,4,5]
// let myArray2 = [6,7,8,9,10]
// const finalArray = myArray.slice(1,4)
// console.log(finalArray);

// function myEach (arry){
//     console.log("orarray;", arry);
//     arry.forEach((nums) => {
//       console.log(nums);
//     })
    
// }

// myEach([1,2,3,4,5])

// ++++++++++++++++++++++++++++++++++++++++++++

// function testFilter (arry){
//      console.log(arry);
//      const afterFilter = arry.filter((num) => {
//      return num > 3
    
//      })
//      console.log(afterFilter);
// }
// testFilter([1,2,3,4,5,6,7,8,9,10,11,24,43,54,6,54,0,1,23])




  
// function findExample(arr) {
//     console.log("Original Array:", arr);
  
//     let found = arr.find(function(item) {
//       return item > 3;
//     });
//     console.log("After find:", found);
//   }
//   findExample([1, 2, 3, 4, 5]);

// function someSort (arry){
//     console.log(arry);
//     const poppy = arry.reverse()
//     console.log(poppy);

// }

// someSort([1,2,3,4,6,7,5,7,9,10])


// const myTime = new Date( 2023,9,12)
// console.log(Math.floor(myTime/1000));

// // let customDate = new Date("2016-08-16");
// // // console.log(Math.floor(customDate/1000));



// function mathMethod (value){
//     console.log(value);
//     const abs = Math.round(value)
//     console.log(abs);
// }

// mathMethod(4.5)

// function testfun (val){
//  for (let i = 0; i < val; i++) {
//      console.log(i);
    
//  }
// }
// testfun(10)



// function addNumber (number1, number2){
//    let result = number1 + number2
//    return result
//     }
//      let totalNumber = addNumber(5 , 5)
//     console.log("Result ", totalNumber);

// let ans = 0
// for (let i = 0; i < 5; i++) {
//    ans = ans + i
    
// }
// console.log(ans);

// function addSum (n){
//     let ans = 0
// for (let i = 0; i < n; i++) {
//    ans = ans + i
    
//    }
//    return ans;
// }
// const returnMine = addSum(40)
// console.log(returnMine);


// function addSum (n){
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//    }
   
// }
// addSum(10)


//  ++++++++++++++++ callback+++++++++++


// function addNum (num1, num2, funCall){
//  const result = num1 + num2
//  funCall(result)
// }


// function activeVoice (val){
//     console.log(`the result of sum of 5 , 5 :  ${val}`);
// }

// function passiveVoice (val1){
//     console.log(`sum result of 5,5 ${val1}`);
// }

//  addNum(5,5,passiveVoice)
 

// +++++++++++++++++++ callback another example ++++++++++++++++

// function squareMine (num){
//    return num * num
// }

// function sumOfSquares(num1,num2){
//   const val1 = squareMine(num1)
//   const val2 = squareMine(num2)
//   return val1 + val2
// }
// console.log(sumOfSquares(2,4));


// function square (num){
//     return num * num
//  }

//  function sumOfSomething(num1,num2,someThing){
//   const val1 = someThing(num1)
//   const val2 = someThing(num2)
//   return val1 + val2
//  }
// console.log(sumOfSomething(2,2,square));


// const myNums = "silent"
// myNums.sort((a,b) => a-b)
// console.log(myNums);

// function isAnagram(str1, str2) {
//   // Remove whitespace and convert strings to lowercase
//   const cleanStr1 = str1.toLowerCase().replace(/[\W_]/g, '');
//   const cleanStr2 = str2.toLowerCase().replace(/[\W_]/g, '');

//   // Check if the lengths are different
//   if (cleanStr1.length !== cleanStr2.length) {
//     return false;
//   }

//   // Sort the characters in both strings and compare
//   const sortedStr1 = cleanStr1.split('').sort().join('');
//   const sortedStr2 = cleanStr2.split('').sort().join('');

//   // Compare the sorted strings
//   return sortedStr1 === sortedStr2;
// }

// // Example usage:
// const string1 = "listen";
// const string2 = "silent";

// console.log(isAnagram(string1, string2)); // Output will be true

// const myIntro = "my name is neeraj"
// console.log(myIntro.split(" "));
// function splitString(str, separator) {
//     console.log("Original String:", str);
//     console.log("After split:", str.split(separator));
//   }
//   splitString("Hello World", " ");


// const myArray = [ 1,2,3,4,5]
// myArray.forEach(function (items){
//  console.log(items);
// })


// function dafjf

// const userInfo = {
//     name: "neeraj",
//     age: 21,
//     idMine: "neeraj@.com"
// }

// console.log(Object.entries(userInfo));

// function tesMine (){
//     let intialNum = 0
// for (let i = 0; i <10; i++) {
//     intialNum = intialNum + i
    
// }
// console.log(intialNum);
// }
// tesMine()






// function myArray1 (){
//  const myArray = [1,2,3,4,5,6,7,8,9]
//  for (let i = 0; i < myArray.length; i++) {
//     myArray[i] = myArray[i] * 3
    
//  }
//  return myArray
// }
// console.log(myArray1());


// const myArray = [1,2,3,4,5,6,7,8,9]
//  for (let i = 0; i < myArray.length; i++) {
//     myArray[i] = myArray[i] * 3
    
//  }
//  console.log(myArray);

// const numMine = 0
// for (let i = 0; i < 10000000000000; i++) {
//    numMine = numMine + i
// }
// console.log(numMine);



// function findSum (n){
//     let startNum = 0
//     for( let i = 0; i < n; i++){
//         startNum = startNum + i
       
        
//   }
//   return startNum
// }
// console.log(findSum(10000));


// const villans =  [ "sukuna", "thanos","muzan","megatron"]

// // villans.forEach( function (element){
// //   console.log(element);
// // })
// function funCall (elements){
//    console.log(elements);
// }

// villans.forEach(funCall)
// function sortExample(arr) {
//    console.log("Original Array:", arr);
 
//    arr.sort(function(a, b) {
//      return a - b;
//    });
//    console.log("After sort:", arr);
//  }
//  sortExample([5, 2, 3, 4, 1]);
 const numbers = [1,45,65,4,2,23,7,8,9,11]
// const sortedMynum = myNums.sort((a,b) => {
//    return a-b
//  })
//  console.log(sortedMynum);
// let bigN = myNums[0]

// for (let  i= 0;  i< myNums.length; i++) {
//     if (myNums[i]> bigN) {
//       bigN = myNums[i]
//     }  
  
// }
// console.log(bigN);
 
              //or//

// function findLargestElement(numbers) {
//   let biggestElement = numbers[0]
//   for (let  i= 0; i < numbers.length; i++) {
//       if (numbers[i]>biggestElement) {
//           biggestElement = numbers[i]
//       }
      
//   }
//   return biggestElement
// }
// console.log(findLargestElement(numbers));
// function isAnagram(str1, str2) {
//   // Removes spaces and convert into the lowercase letter

//   str1 = str1.replace(/\s/g, '').toLowerCase()
//   str2 = str2.replace(/\s/g, '').toLowerCase()
//   // console.log(str1, str2)

//   if (str1.length !== str2.length) {
//     return false
//   }

//   // Sort the characters in the given string
//   str1 = str1.split('').sort().join('')
//   str2 = str2.split('').sort().join('')

//   // Compare the sorted String

//   return str1 === str2
// }

// const check = isAnagram('silenT   ' , 'LisTen')
// console.log(check) // False


// let userName = "neeraj"
// const userSplit = userName.sort
// console.log(userSplit);


// function isAnagram(str1, str2) {
//   // removes whitespaces and lowercases the input
//   str1 = str1.replace(/\s/g, '').toLowerCase()
//   str2 = str2.replace(/\s/g, '').toLowerCase()
  
//   // length of the string must be equal to be an anagram
//    if (str1.legth !== str2.legth) {
//       return false;
//    }
//   // sorting the string
//   str1 = str1.split('').sort().join('')
//   str2 = str2.split('').sort().join('')
//   //
//   return str1 === str2

// }

// const  result = isAnagram('triangl  e' , 'integral' ) 
// console.log(result);
// module.exports = isAnagram;

// const userName = "   nee r a j   "

// const perfectName = userName.trim()
// console.log(perfectName);


// const nameUser = "trinagle"
// const nameUserTwo = "integral"

// const sortMe = nameUser.split("").sort()
// console.log(sortMe);
// const sortMeTwo = nameUserTwo.split("").sort()
// console.log(sortMeTwo);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  // const transactions = [
  //   {
  //     id: 1,
  //     timestamp: 1656076800000,
  //     price: 250,
  //     category: 'Food',
  //     itemName: 'Pizza',
  //   },
  //   {
  //     id: 1,
  //     timestamp: 1656076800000,
  //     price: 1000,
  //     category: 'electronic',
  //     itemName: 'rgb keyboard',
  //   },
  //   {
  //     id: 1,
  //     timestamp: 1656076800000,
  //     price: 20,
  //     category: 'medicines',
  //     itemName: 'crocine advance',
  //   },
  // ]




//   function calculateCartPrice(transactions){
//     // let marketArray = []
//     for (let i = 0; i< transactions.length; i++) {
//     // marketArray.push(transactions[i].category)
//      console.log(transactions[i]);
//     }
//     // console.log(marketArray); 
//   }
// calculateCartPrice(transactions)
// function calculateTotalSpentByCategory(transactions) {
//   let category = {};
//   for (let i = 0; i < transactions.length; i++) {
//     category[transactions[i]['category']] =
//       category[transactions[i]['category']] + transactions[i]['price'] ||
//       transactions[i]['price'];
//   }
//   let res = Object.entries(category).map((entry) => {
//     const [key, value] = entry;
//     return { category: key, totalSpent: value };
//   });
//   return res;
// }

// console.log(calculateTotalSpentByCategory(transactions));

// function calculateTotalSpentByCategory(transactions) {
//   let map = new Map();
//   let res = [];
//   transactions.forEach(element => {
//     const key = element.category;
//     if (map.has(key)) {
//       map.set(key, map.get(key) + element.price);
//     }
//     else {
//       map.set(key, element.price);
//     }
//   });
//   for (const key of map.keys()) {
//     let obj = { 'category': key, 'totalSpent': map.get(key) };
//     res.push(obj);
//   }
//   return res;
// }
// console.log(calculateTotalSpentByCategory(transactions));
// module.exports = calculateTotalSpentByCategory;

// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 250,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 1000,
//     category: 'electronic',
//     itemName: 'rgb keyboard',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 20,
//     category: 'medicines',
//     itemName: 'crocine advance',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 30,
//     category: 'davaii',
//     itemName: 'crocine advance',
//   }
// ]
  

// function calculateTotalSpentByCategory(transactions) {
//   const categoriesPurchased = {}
//   transactions.forEach(transaction => {
//     const {category,price} = transaction
//     if (categoriesPurchased[category]) {
//       categoriesPurchased[category] += price
      
//     } else {
//       categoriesPurchased[category] = price
//     }
    
//   });

//   const result = Object.keys(categoriesPurchased).map(category => ({
//     category,
//     totalspent: categoriesPurchased[category]
//   }))

//   return result;

// }
// console.log(calculateTotalSpentByCategory(transactions));
// module.exports = calculateTotalSpentByCategory;


// function calculateTotalSpentByCategory(transactions) {
//   // Create an empty object to store categories and their total spent amounts
//   const categories = {};

//   // Iterate through each transaction in the 'transactions' array
//   transactions.forEach(transaction => {
//     // Destructure the 'category' and 'price' properties from the current transaction
//     const { category, price } = transaction;
    
//     // Check if the category already exists in the 'categories' object
//     if (categories[category]) {
//       // If it exists, add the price of the current transaction to the existing total
//       categories[category] += price;
//     } else {
//       // If it doesn't exist, set the total spent for this category to the current transaction's price
//       categories[category] = price;
//     }
//   });

//   // Create an array of objects using 'Object.keys' to iterate through category keys in 'categories'
//   const result = Object.keys(categories).map(category => ({
//     // For each category, create an object with 'category' and 'totalSpent' properties
//     category,
//     totalSpent: categories[category]
//   }));

//   // Return the resulting array containing unique categories with their total spent amounts
//   return result;
// }
// console.log(calculateTotalSpentByCategory(transactions));


// const transactions = [
//     {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 250,
//       category: 'Food',
//       itemName: 'Pizza',
//     },
//     {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 1000,
//       category: 'electronic',
//       itemName: 'rgb keyboard',
//     },
//     {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 20,
//       category: 'medicines',
//       itemName: 'crocine advance',
//     },
//     {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 30,
//       category: 'davaii',
//       itemName: 'crocine advance',
//     }
//   ]

//   let hehe = Object.entries(transactions).map(entry => )
//   console.log(hehe);

// +++++++++++++++++++++++++++++++++++




// +++++++++++++++++++++++++++++++++++++++

// function reverseMe (str){
// str1 = str.split("").reverse().join("")
// return str1
// }
// console.log(reverseMe("civic"));





  // function timeTaken(upto100){
  //   let iniNumber = 0
  //   for (let i = 1; i < upto100; i++){
  //     iniNumber = iniNumber + i
  //   }
  //   return iniNumber
  // }
  // const beforeFunctionExecution = new Date()
  // const timeBefore = beforeFunctionExecution.getTime()
  // // console.log(timeBefore);
  
  // console.log(timeTaken(1000000000));
  
  // const afterFunctionExecution = new Date()
  // const timeAfter = afterFunctionExecution.getTime()
  // // console.log(timeAfter);
  
  // console.log((timeAfter - timeBefore)/1000);
  // // return 0.01;

  // return 0.01;

// const myTime = new Date()
// console.log(myTime.toLocaleTimeString());

// setTimeout(() => {
//   let initialNum = 0
//   for(let i = 0; i<4; i++){
//   initialNum = initialNum + i
// }

// let iniNumber = 0

// setInterval(() => {
  
//   iniNumber++
//   console.log(iniNumber);
  
// }, 1000);
 
// setTimeout(() => {
//   iniNumber++
//   console.log(iniNumber);
 

// }, 1000);
// function counter(currentValue) {
//   console.log(currentValue)
//   currentValue++
//   // console.log(currentValue);
//   setTimeout(() => {
//     counter(currentValue);
//   }, 1000);



// }
// counter(0)
// const fs = require("fs")
// fs.readFile("01_basics\a.txt","utf-8",function(err,data){
//     console.log(data);
// })
// Using forward slashes

// ++++++++__________)))))))))_______+++++++++ fs.readfile ++++++++++++


// const fs = require("fs");
// fs.readFile("01_basics/a.txt", "utf-8", function(err, data) {
//     console.log(data);
// });

// +++++++++++____________))))))))))))))))++++++++++++++++
// Function that returns a promise resolving after t1 seconds
// function promiseAfterT1(t1) {
//   return new Promise(resolve => {
//       setTimeout(() => {
//           resolve(`Resolved after ${t1} seconds`);
//       }, t1 * 1000);
//   });
// }

// // Function that returns a promise resolving after t2 seconds
// function promiseAfterT2(t2) {
//   return new Promise(resolve => {
//       setTimeout(() => {
//           resolve(`Resolved after ${t2} seconds`);
//       }, t2 * 1000);
//   });
// }

// // Function that returns a promise resolving after t3 seconds
// function promiseAfterT3(t3) {
//   return new Promise(resolve => {
//       setTimeout(() => {
//           resolve(`Resolved after ${t3} seconds`);
//       }, t3 * 1000);
//   });
// }

// Function that waits for all 3 promises to resolve using Promise.all
// Returns a Promise that resolves with the total time taken in milliseconds
// function waitForAllPromises(t1, t2, t3) {
//   const startTime = Date.now();
//   const promise1 = promiseAfterT1(t1);
//   const promise2 = promiseAfterT2(t2);
//   const promise3 = promiseAfterT3(t3);

//   return Promise.all([promise1, promise2, promise3]).then(() => {
//       const endTime = Date.now();
//       return endTime - startTime;
//   });
// }

// // Usage
// waitForAllPromises(2, 4, 3).then((totalTime) => {
//   console.log(`Total time taken: ${totalTime} milliseconds`);
// })
// // waitForAllPromises(2, 4, 3).then(totalTime => {
// //   console.log(`Total time taken: ${totalTime} milliseconds`);
// // }).catch(err => {
// //   console.error('Error occurred:', err);
// // });


// function wait1(t) {
//  return new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve("hello from t")
//   },t * 1000)
//  })
  
// }
// // wait1(2).then(() => {console.log("oni chan!");})

// function wait2(t2) {
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("hello from t2")
//     },t2 * 1000)
//    })
    
// }

// function wait3(t3) {
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("hello from t3")
//     },t3 * 1000)
//    })
   
// }

// function calculateTime(t1, t2, t3) {
//   const startTime = Date.now()
//   const promiseOne = wait1(t1)
//   const promiseTwo = wait2(t2)
//   const promiseThree = wait3(t3)
//   return Promise.all([promiseOne,promiseTwo,promiseThree]).then(() => {
//       const endTime = Date.now()
//       return endTime - startTime
//   })


// }
// calculateTime(1,2,3).then((f)=>{
//   console.log(`total time took : ${f}`);
// })

// module.exports = calculateTime;

// function wait1(t1) {
//   return new Promise((resolve) => {
//       setTimeout(() =>{
//           resolve("hello from t1")
//       }, t1 * 1000)
//   })
  
// }
// // wait1(2).then(() => {console.log("oni chan!");})

// // function wait1(t1) {
// //   return new Promise((resolve) => {
// //       setTimeout(() =>{
// //           resolve("hello from t1")
// //       }, t1 * 1000)
// //   })
  
// // }
// // // wait1(2).then(() => {console.log("oni chan!");})

// // function wait2(t2) {
// //   return new Promise((resolve) => {
// //       setTimeout(() =>{
// //           resolve("hello from t2")
// //       }, t2 * 1000)
// //   })

// // }

// // function wait3(t3) {
// //   return new Promise((resolve) => {
// //       setTimeout(() =>{
// //           resolve("hello from t3")
// //       }, t3 * 1000)
// //   })

// // }

// // function calculateTime(t1, t2, t3) {
// //   const startTime = Date.now()
// //   const promiseOne = wait1(t1)
// //   const promiseTwo = wait2(t2)
// //   const promiseThree = wait3(t3)
// //   return Promise.all([promiseOne,promiseTwo,promiseThree]).then(() => {
// //       const endTime = Date.now()
// //       return endTime - startTime
// //   })


// // }
// // calculateTime(1,2,3).then((samay)=>{
// //   console.log(`Total time it tokk : ${samay} milliseconds`);
// // })

// // // module.exports = calculateTime;


// function wait1(t) {
//   return new Promise((resolve) =>{
//       setTimeout(()=>{
//           resolve("hi 1")
//       }, t *1000)
//   })

// }

// function wait2(t2) {
//       return new Promise((resolve) =>{
//       setTimeout(()=>{
//           resolve("hi 2")
//       }, t2 *1000)
//   })


// }

// function wait3(t3) {
//   return new Promise((resolve) =>{
//       setTimeout(()=>{
//           resolve("hi 3")
//       }, t3 *1000)
//   })


// }

// function calculateTime(t1, t2, t3) {
//   const timeInTheBeggining = Date.now()
//   return wait1(t1)
//   .then(() =>{
//       return wait1(t2)
//   })
//   .then(() =>{
//       return wait3(t3)
//   })
//   .then(() => {
//     const timeInTheEnd = Date.now()
//     return timeInTheEnd - timeInTheBeggining
//   })

// }
// calculateTime(1,2,3).then((timeTaken)=>{
//   console.log(`total time taken :- ${(timeTaken)/1000} seconds`);
// })




// function wait1(t1) {
//   return new Promise((resolve) => {
//       setTimeout(() =>{
//           resolve("hello from t1")
//       }, t1 * 1000)
//   })
  
// }
// // wait1(2).then(() => {console.log("oni chan!");})

// function wait2(t2) {
//   return new Promise((resolve) => {
//       setTimeout(() =>{
//           resolve("hello from t2")
//       }, t2 * 1000)
//   })

// }

// function wait3(t3) {
//   return new Promise((resolve) => {
//       setTimeout(() =>{
//           resolve("hello from t3")
//       }, t3 * 1000)
//   })

// }

// function calculateTime(t1, t2, t3) {
//   const startTime = Date.now()
//   const promiseOne = wait1(t1)
//   const promiseTwo = wait2(t2)
//   const promiseThree = wait3(t3)
//   return Promise.all([promiseOne,promiseTwo,promiseThree]).then(() => {
//       const endTime = Date.now()
//       return endTime - startTime
//   })


// }
// calculateTime(1,2,3).then((samay)=>{
//   console.log(`Total time it took : ${samay} milliseconds` );
// })



// const { v4 : uuidv4} = require("uuid")
const myDetail = {
  
  name:"neeraj",
  city: "new-delhi"
}
myDetail.city = "mumbai"
console.log(myDetail);





