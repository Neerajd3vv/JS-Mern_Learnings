// arrow function se
const myNumber = [ 2, 4, 6, 8, 10]

// const myTotal = myNumber.reduce((accumulatedValue , currentValue) => accumulatedValue + currentValue , 0  ) 

// console.log(myTotal);
let ini = 0
for (let i = 0; i < myNumber.length; i++) {
    ini = ini + myNumber[i]
           or
    // ini += myNumber[i]

}
console.log(ini);

// const arr = [23, 34, 77, 99, 324];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// bina arrow function ke


// const myNumber = [ 2, 4, 6, 8, 10]

// const myTotal = myNumber.reduce(function (accumulatedValue , currentValue) {
//     console.log(`acc: ${accumulatedValue} and cuurvalue: ${currentValue}`);
//     return  accumulatedValue + currentValue
   
// },0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


//  const myTotal = shoppingCart.reduce((accu , item) => accu + item.price , 0)
//  console.log(myTotal);


//  ++++++++++++++++++++++++ OR +++++++++++++++++++++++++++

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]


//  const myTotal = shoppingCart.reduce(function (accu , item) {
//     console.log(`accu: ${accu} and itemP ${item.price}`);
//     return accu + item.price
//  }, 0)
//  console.log(myTotal);




