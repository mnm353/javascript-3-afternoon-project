/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

let { color, make, model, year } = carDetails;



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
let { title, firstName, lastName } = obj;

  
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/
const states = {
  utah: 4,
  california: 16,
  texas: 13,
  arizona: 9
};

function totalPopulation (obj){
  return (utah + california + texas + arizona)
};



////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/
const food = {
  carb: 'pasta',
  fat: 'almonds',
  protein: 'chicken'
}

function ingredients(food){
  let { carb } = newCarb;
  let { fat } = newFat;
  let { protein } = newProtein;
  let newArr = {newCarb, newFat, newProtein};
  return newArr;
}



////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

let numbers = {
  first: 4,
  second: 15,
  third: 8
}

function largeNumbers( {first, second, third} ) {
  return(Math.min(...numbers))
}



////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

const numberList = {
  a: [3, 6, 2, 5, 8],
  b: [4, 3, 6, 2],
  c: [4, 2, 10]
}

let { a, b, c } = numberList;

function numberGroups ({numberList}) {numberList.reduce((r, e, p, i) => r[p].length > e.length ? p : i), 0}

// function numberGroups({numberList}) {numberGroups.reduce(a,i,ii)
//   for(let i=0; i>length.numberList; i++)
//   if (ii === 1){
//     return a
//   };
//   if (i.length > a.length){
//     return i
//   }
//   return a
// }
