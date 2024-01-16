 // ARRAYS //

// let myArray = [1,2,3,4,5]
// console.log(myArray);

 let yourArray = new Array("neeraj", 1, "sumit", 2)  /* new way to declare array */
// console.log(yourArray);

// let myArray = [1,2,3,4,5]
// console.log(myArray);
// myArray.push("rahul")
// myArray.pop()

// myArray.unshift(4)  /*ye 4 sabse aage put kr dega */
// myArray.shift()  /*shift sabse aage wala element delete kr deta hai*/
// console.log(myArray);
// console.log(myArray.indexOf("rahul"));
// console.log(myArray.includes("neeraj"));

// let secondArray = myArray.join()
// console.log(secondArray);        /* join ne join kiya aur datatype ko object se string bana diya*/
// console.log(typeof secondArray);

// console.log(myArray.join());  /* join wala method aise bhi lag skta hai*/
// +++++++++++++++++ slice ++++++++++++++++++//
//  let myArray = [1,2,3,4,5]
//  let thirdArray = myArray.slice(1, 4)
// // 1st way to slice
//  console.log(thirdArray);


//+++++++++++++++ spilce +++++++++++++++++//

let myArray = [1,2,3,4,5]
let thirdArray = myArray.splice(4, 1)  
console.log(thirdArray);

//++++++++++++++++++++++ some other methods ++++++++++++++++//

 let dcHeroes = ["batman", "superman", "flash"]
 let marvelHeroes = ["ironman", "hulk", "thor"] /* push krne se dcheroes will be treated as another element of marvelheroes funtion */
marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes[3]);

// let dcHeroes = ["batman", "superman", "flash"]
// let marvelHeroes = ["ironman", "hulk", "thor"]  /* proper way to merge two function into 1 by using concat */
// let allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

/* there is another method to merge functions */
// let dcHeroes = ["batman", "superman", "flash"]
// let marvelHeroes = ["ironman", "hulk", "thor"]
 
// let combineHeroes = [...marvelHeroes,...dcHeroes] /*most prefer method as it can merge more than two functions easliy */
// console.log(combineHeroes);

// let groupArray = [1, 2, [3, 4, 5], 6,  7, ["neeraj","sumit",[9]]]
// console.log(groupArray.flat(Infinity)); /* return new aaray from sets elment of array */

// // console.log(Array.isArray("neeraj"));

// // console.log(Array.from("neeraj"));

// let score1 = 10   
// let score2 = 22  /* return a new aaray from a set of elements */
// let score3 = 69
// console.log(Array.of(score1, score2, score3));


class Todo {
    constructor() {
      this.todos = [];
    }
  
    add(task) {
      this.todos.push(task);
    }
    remove(todoIndex) {
      this.todos = this.todos.filter((_, index) => index !== todoIndex);
      return this.todos;
    }
  
    update(index, updatedTodo) {
      if (index > this.todos.length - 1) {
        return this.todos;
      }
      this.todos[index] = updatedTodo;
      return this.todos;
    }
  
    getAll() {
      return this.todos;
    }
    get(index) {
      if (index > this.todos.length - 1) return null;
      return this.todos[index];
    }
  
    clear() {
      this.todos = [];
    }
  }
  