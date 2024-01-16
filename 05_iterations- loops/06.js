const myNumber =  [ 1,2,3,4,5,6,7,8,9,10]

// const newNumbs = myNumber.map( (numb) => numb + 10)
// console.log(newNumbs);

// ++++++++++++++ CHAINING +++++++++++++++

// const myNumber1 =  [ 1,2,3,4,5,6,7,8,9,10]
// const customCalculatedNum = myNumber.map(function (num) {return num * 10})
//                            .map((num) => num + 2 )
//                            .filter((num) => {return num >= 32} )
//                         //    or
//                         //    .filter((num) =>num >= 32)

// console.log(customCalculatedNum);                           


// =========================================================================


const myNumber1 =  [ 1,2,3,4,5,6,7,8,9,10]
const customCalculatedNum = myNumber.map((num) => num * 10)
                           .map((num) => num + 2 )
                           .filter((num) => {return num >= 32} )
                        //    or
                        //    .filter((num) =>num >= 32)

console.log(customCalculatedNum);                           