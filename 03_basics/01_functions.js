// # function #   basically means ke humne bohot sara code ek pakage me band kr diya hai aur hum wo saara code sirf pakage se kitne bar  bhi call kr skta hia, means ==> functions are like set of instructions that do something specific when we all that function

// console.log("n");
// console.log("w");
// console.log("e");
// console.log("r");
// console.log("a");
// console.log("j"); 

// ab mujhe ye code wpas likh hua to bhot lamba hai 


// instead use function

// function myName (){
//  console.log("n");
//  console.log("e");
//  console.log("e");
//  console.log("r");
//  console.log("a");
//  console.log("j"); 

// }

// myname()

/////////////////////////////////////////////////////////////////////

// function addNumber (number1, number2){
// console.log(number1 + number2);
// }
// addNumber(5 , 5)
  

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// function addNumber (number1, number2){
// console.log(number1 + number2);
// }
//  let totalNumber = addNumber(5 , 5)
// console.log("Result ", totalNumber);


// function addNumber (number1, number2){
//    let result = number1 + number2
//    return result
//     }
//      let totalNumber = addNumber(5 , 5)
//     console.log("Result ", totalNumber);

// +++++++++++++ OR ++++++++++++++++// note - return ke baad kuch bhi print nhi hota //
    
// function addNumber (number1, number2){
//   return number1 + number2 
//     }
//       let totalNumber = addNumber(5 , 5)
//      console.log("Result ", totalNumber);

//////////////////////////////////////////////////////////////////////
function myUser (userName){
  if(userName === undefined){
    console.log("please enter a userName");
    return
  }
  return `my name is ${userName}`
}
console.log(myUser());

// function myUser (userName = "goku" ){
//   if(userName === undefined){
//     console.log("please enter a userName");
//    return
//   }
//   return `my name is ${userName}`
// }
// console.log(myUser("popu"));

/////////////////////////// Rest Operator in function //////////////////////

function calculateCartPrice (...numb1){
  return numb1
}
console.log(calculateCartPrice(200,400,450));

/////////////// object as an function ///////////////////

// const userInfo = {
//   name: "neeraj",
//   age: 21,
//   email: "neerajgoogle.com"
// }

// function handleObject (userInfo){
//  console.log(`my name is : ${userInfo.name} and my email is : ${userInfo.email}`);
// }
// handleObject(userInfo)

/////////////////// arrays as an function ///////////////////////
 const superHeroes = [ "superman", "spiderman", "pokeman"]

 function handleArray (superHeroes){
 return superHeroes[2]
 }

//  console.log(handleArray(superHeroes));
// or //
// console.log(handleArray(["superman","spiderman","pokeman"]))

