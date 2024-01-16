
// for of
// const numArray = [ 1,2,3,4]
// for(const myArray of numArray ){
//  console.log(myArray);
// }

// const nameString = "neeraj"
// for(const ranString of nameString ){
//  console.log(ranString);
// }



// Maps//
  
// const map = new Map()
// map.set('IN' , "India" )
// map.set('Uk' , "united kingdom" )
// map.set('Fr' , "France" )
// console.log(map);

// let see map kese iterate hoga

const map = new Map()
map.set('IN' , "India" )
map.set('Uk' , "united kingdom" )
map.set('Fr' , "France" )
// console.log(map);

for(const [key , value] of map){
 console.log(key, "->" ,value);
}


// object iteration
// / for in loop to iterate objects
const myObject = {
    js: "javascript",
    rb: "ruby",
    swift: "swift by apple"
}




for(const key in myObject){
//  console.log(`${key} shortcut is for ${myObject[key]}`);
}

// const programming = ["java", "js", "kotlin", "swift", "python"]

// for (const key in programming){
//     console.log(key);
//     console.log(programming[key]);
// }