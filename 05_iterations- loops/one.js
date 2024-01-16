  //+++++++++++++ for loops +++++++++++++++


// for (let i = 0; i <= 10; i++){
  
//   console.log(i);
// }

// for (let i = 0; i < 10; i++){
//    const counting = i;
   
//    if(counting == 5){
//      console.log("we reached five");
     
//    } 
//    console.log(counting);
// }


// loop within loop let see how that will execute. //

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value ${j} innver value ${i}`);
        
    }
    
}




// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 1; j <= 10; j++) {
//        console.log( j + "*" + i + "=" + j*i);
        
//     }
    
// }

// how to stop the loop in the middle +++++++++++++++++++++//


for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`${i} is detected`);
        // break;
        //continue                             // ->>> use break// and continue
    }
    console.log(`value of i is ${i}`);
}

// let heroes = ["supermen", "hulk", "papaman"]
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);    
// }