if (true){
    let a = 10
    const c = 14
    var z = 69  
}
// console.log(a);
// console.log(b);
// console.log(z);


// block scope and global scope
 let a = 15  // ------>> global scope
 if (true){
     let a = 12    //    ========> block scope
     const b = 15
    console.log(a);
 }
  console.log(a);


////////// function within function its known as "nest function".//////////////
function one(){
    const userName = "Neeraj"
        function two(){
        const age = 12
        console.log(userName);
        
    }
     console.log(age); 
   
        
    two()
}

one()


// same as above but with if statemnt //


// if(true){
//     const username = "neeraj"
//     if (username === "neeraj"){
//         const website = " neerajpapa.com"
//         console.log(username +  website);
//     }
//       console.log(website); //===>>> cannot access it as its outside block scope/
//       console.log(username);
// }

// two way to declare function

// +++++++++++++++++++++++ 1st way +++++++++++++++++++++++++
// console.log(addNumber(5));
// function addNumber (value){
//  return value + 1
// }
   


// ++++++++++++++++++++  2nd way( we store the function inside a variable here) ++++++++++++++++++++++++++++

// const addNumber = function (value){     
//  return value + 2
// }
// console.log(addNumber(7));