// array has it own property for loop lagne kre //

// const villans =  [ "sukuna", "thanos","muzan","megatron"]

// villans.forEach( function (element){
//   console.log(element);
// })


// +++++++++++++++++++++++++++++++++++++++++++

// villans.forEach( (element) =>{
//     console.log(element);
//   })
  
//   ++++++++if we declared function already we can loop like this+++++++++++++

//   function myFavVillans (element){
//     console.log(element);
//   }
//   villans.forEach(myFavVillans)


const villans =  [ "sukuna", "thanos","muzan","megatron"]

villans.forEach( function (element, index, arr){
  console.log(element, index, arr);
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function ke aandar object pe loop lagana

const userInfo = [
    {
        userName:  "neeraj",
        age: 21
    },
    {
        userName: "sumit",
        age: 22
    },
    {
        userName: "himanshu",
        age: 18
    }

]

userInfo.forEach((element) => {
  console.log(element["age"]);
})