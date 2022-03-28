// JavaScript Higher Order Functions 3/28/2022

// - Built in methods - .push(), code snippets that is given a name and added to the JavaScript language, some take more info and some don't

// Syntatical sugar - a piece of code created to make a language sweeter

// Error message: .toUpperCase is not a function - look at what the method is being called on

// - Functions - reusable code machines
// Encapsulation - scope is defined by executable block of code
// Parameters - variable that belongs to the function
// Arguments - actual data that is assigned to the parameter

// const myFunction = (parameter) => {
//   stuff in here is encapsulated in the function's scope
//   I can reference a parameter in here
// }
// myFunction("hello, I am an argument")


// - Iteration - process of performing an action a certain number of times or until a condition is met

// What data types do you associate with iteraction - arrays, arrays are a collection of things we can do something to every item or make a decision about every item

// Higher Order Function - subcategory of built in method that are used for iteration, HOF are called on arrays

// .forEach()
[2, 3, 4, 5].forEach() - value is the paramteter

[2, 3, 4, 5].forEach(value => {
  console.log(value)
})

[2, 3, 4, 5].forEach((value, index, array) => {
  console.log("value:", value)
  console.log("index:", index)
  console.log("array:", array)
})

// order of parameters will always be value, index, array - can be called whatever we want
[2, 3, 4, 5].forEach((apple, banana, peach) => {
  console.log("value:", apple)
  console.log("index:", banana)
  console.log("array:", peach)
})

const myArray = [2, 3, 4, 5]
myArray.forEach((value, index, array) => {
  console.log("value:", value)
  console.log("index:", index)
  console.log("array:", array)
})

// .map() - HOF, take a function as an argument, acts on arrays, iterates, returns an array, does something to every item in an array - will return an array the same length

const myArray = [2, 3, 4, 5, 6, 7]

// myArray.map()
let myMappedContent = myArray.map(value => {
  return value * 2
})
console.log("original array:", myArray)
console.log("mapped array:", myMappedContent)
// Output: mapped array: [ 4, 6, 8, 10, 12, 14 ]
// Map needs a return - if you ever see undefined as an output, go look at your returns


// .filter() - HOF, takes a function as an argument, acts on arrays, iterates, returns an array, makes a decision about every item in the array, return a subset of the array

const myArray = [2, 3, 4, 5, 6, 7]

// myArray.filter()
let myFilteredContent = myArray.filter(value => {
  return value % 2 !== 0
})
console.log("original array:", myArray)
console.log("filtered array:", myFilteredContent)
// Output: filtered array: [ 3, 5, 7 ]



// Create code that will act on an array of numbers and return whether the number is even or odd

// Create a function - evenOrOdd
// Parameter - array
// Do something to every item in the array - iteration, map
// Conditional statement with modulo

const evenOrOdd = (array) => {
  return array.map(value => {
    if(value % 2 === 0) {
      return "even"
    } else {
      return "odd"
    }
  })
}
console.log(evenOrOdd([2, 3, 4, 5, 5]))
console.log(evenOrOdd(myArray))
console.log(evenOrOdd([10, 11, 12, 13]))


// Create the code that will act on an array of numbers and return the values at the odd indexes

// Create a function - oddIndexes
// Parameter - array
// Look at every item in the array, iteration
// Make a decision about each item in the array - filter
// Decide if the index is odd and return the value


const oddIndexes = (array) => {
  return array.filter((value, index) => {
    return index % 2 !== 0
  })
}
console.log(oddIndexes([1, 2, 3, 4, 5, 5]))
console.log(oddIndexes(myArray))
console.log(oddIndexes([10, 11, 12, 13]))



// Create the code that acts on an array of mixed data and return only the given data type based on user input

const mixedData1 = [3, 4, 5, "hello", "hi", true, null, false, 4, 6, "yo"]
const mixedData2 = [3, "hey", 5, 6, "hola", true, false, 4, 6, "sup"]

// create a function - sifter
// parameter - array, dataType
// make a decision about every item in the array - filter
// typeof to evaluate

const sifter = (array, dataType) => {
  return array.filter(value => {
    return typeof value === dataType
  })
}
console.log(sifter(mixedData1, "string"))
console.log(sifter(mixedData1, "boolean"))
console.log(sifter(mixedData2, "boolean"))
console.log(sifter(mixedData2, "number"))


// sifter refactor
const sifter = (array, dataType1, dataType2) => {
  return array.filter(value => {
    return typeof value === dataType1 || typeof value === dataType2
  })
}
console.log(sifter(mixedData1, "string", "null"))
