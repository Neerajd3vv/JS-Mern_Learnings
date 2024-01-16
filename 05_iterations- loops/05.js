// filter property

const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const customnum = myNumbs.filter( (element) => element > 4 )
console.log(customnum);

// const myNumbAboveFour = []
// for (let  i= 0;  i < myNumbs.length; i++) {
//      if (myNumbs[i] > 4) {
//         myNumbAboveFour.push(myNumbs[i])
       
//      }
     
// }
// console.log(myNumbAboveFour);

// const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  const customnum = myNumbs.filter( (element) => { return element > 4
// } )
// console.log(customnum);
//or

// const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  const customnum = myNumbs.filter( (element) => element > 4 )
// console.log(customnum);

// following is the actual way to put filter on data we got from he database//

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//  const userBooks =  books.filter((items) => items.genre === 'Non-Fiction')
//  console.log(userBooks);


//  const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//  const userBooks =  books.filter( (items) => { return items.publish >= 2000} )
//  console.log(userBooks);


 
//  const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//  const userBooks =  books.filter( (items) => { 
//     return items.publish >= 1995 && items.genre === "History"
// } )
//  console.log(userBooks);