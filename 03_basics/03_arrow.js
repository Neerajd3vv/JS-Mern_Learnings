const userwelcome = {
    name: "neeraj",
    type: "human",
    welcomeMessage: function(){
        console.log(`${this.name} , welcome to the website`);
        //console.log(this); //-->>> this hume current context batata hai
    }
}
// console.log(userwelcome);

// userwelcome.welcomeMessage()

userwelcome.name = "sumit"

// userwelcome.welcomeMessage()

// function chai (){            
//     const userName = "neeraj"
//     console.log(this.userName);     // functions ke andar aake this use nhi ho raha//
// }
// chai()

// //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const chai = () => {
    console.log(this);
}
chai()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// arrow function

//  const addTwo = (num1 , num2 ) => {
//   return num1 + num2
//  }
//  console.log(addTwo(3,3));

// 2nd way to right arrow function called "implicit return"

const addTwo = (num1 , num2 ) =>  num1 + num2
   
   console.log(addTwo(3,3));

// //////////////////////////////  or  ////////////////
const addnum = (num1 , num2) => ( num1 + num2 )
console.log(addTwo(3,5));
    