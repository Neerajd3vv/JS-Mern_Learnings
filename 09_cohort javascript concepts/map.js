

const numArray = [1,2,3,4,5,6,7,8,9,10]
// function multiples (i){
//     return  i * 2
// }


 const ans = numArray.map((i) => i * 2 )
                     .map((i) => i + 1)
                     .filter((i) => i > 13)
 console.log(ans);