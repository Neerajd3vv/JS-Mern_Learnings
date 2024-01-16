// class Animal {
//     constructor (name, legCount, speaks){
//      this.name = name;
//      this.legCount = legCount;
//      this.speaks = speaks;
//     }
//     speak(){
//         console.log("hi there" + this.speaks);
//     }
//     doggy(){
//         console.log(this.name, this.legCount, this.speaks);
//     }
//  }

//  let dog = new Animal("doggy" , 4 , " nodebhow bhow") //  creating an object
//  dog.doggy()
//  dog.speak()   // call function on object of a class

//  class Animal {
//     constructor (name, legCount, speaks){
//      this.name = name;
//      this.legCount = legCount;
//      this.speaks = speaks;
//     }
//     static myType(){
//         console.log("im a animal");
//     }
//     speak(){
//         console.log("hi there" + this.speaks);
//     }
//     doggy(){
//         console.log(this.name, this.legCount, this.speaks);
//     }
//  }
//  Animal.myType()  // => static function can be directly called on a class//
//  let dog = new Animal("doggy" , 4 , " bhow bhow") //  creating an object
//  dog.doggy()
//  dog.speak()   // call function on object of a class

// ++++++ how to check how much time a function take to execute +++++++++++++++

// function calculateSum (){
//     let startNum = 0
//     for (let i = 0; i < 1000000000 ; i++) {
//        startNum = startNum + i

//     }
//     return startNum
// }

// const beforeTime =  new Date ()
// const beforeTimeInMs = beforeTime.getTime()

// calculateSum()

// const afterTime = new Date()
// const afterTimeInms = afterTime.getTime()

// console.log(afterTimeInms - beforeTimeInMs);

// ++++++++++ JSON ?? ++++++++++

const userInfo = {
  name: "sumit",
  age: 21,
  satus: "single",
  dream: "world tour",
};
console.log(userInfo);
const myJson = JSON.stringify(userInfo);
console.log(myJson);

// const jsonMine = {"name":"sumit","age":21,"satus":"single","dream":"world tour"}

// console.log(JSON.parse(jsonMine));




// const userInfo = {
//   name: "sumit",
//   age: 21,
//   satus: "single",
//   dream: "world tour",
// };

const myJson2 = JSON.parse(myJson);
console.log(myJson2);

// class dishes{
//     constructor(nameDish,spiceLevel,cookTime){
//         this.nameDish = nameDish
//         this.spiceLevel = spiceLevel
//         this.cookTime = cookTime
//     }

//      cookingtime(){
//         console.log(`this dish take around : ${this.cookTime} to cook`);
//      }
// }

// const recipe = new dishes("mattar paneer","high","40min")
// recipe.cookingtime()