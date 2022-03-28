// Functions Loops Arrays
// EX: Create a function that multiplies each number in an array of numbers by 5

let myArrayOfNums = [2, 3, 4, 5, 6]
// Expected Output: [10, 15, 20, 25, 30]

// Iteration is the process of performing an action over and over until a condition is met


// const mult5 = (array) => {
//   return array * 5
// }

// console.log(mult5(myArrayOfNums))
// // Output: NaN


// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
//   }
// }

// console.log(mult5(myArrayOfNums))
// // Output: 
// // 2
// // 3
// // 4
// // 5
// // 6
// // undefined


// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i] * 5)
//   }
// }

// console.log(mult5(myArrayOfNums))
// // Output: 
// // 10
// // 15
// // 20
// // 25
// // 30
// // undefined

// const mult5 = (array) => {
//   let newArray = []
//   for(let i = 0; i < array.length; i++) {
//     array[i] * 5
//   }
//   return newArray
// }

// console.log(mult5(myArrayOfNums))
// // Output: []


const mult5 = (array) => {
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 5)
  }
  return newArray
}

console.log(mult5(myArrayOfNums))
// Output: [ 10, 15, 20, 25, 30 ]


console.log(mult5([30, 40, 50]))
// Output: [ 150, 200, 250 ]


// __________________________

// EX: Create a function that takes a set of data and adds each item to a sentance

let coffees = ["latte", "mocha", "cold brew", "black"]
// Expected Output: ["I would like a latte", "I would like a mocha", etc]
let teas = ["chai", "matcha", "earl gray", "green"]
// Expected Output: ["I would like a chai", "I would like a matcha", etc]

// input: array of strings
// output: array of strings with each sentance in a string includes the current index value

// PSEUDOCODE:
// Create a function that takes in an array
// set up an empty array to store new strings
// access each item in the array using iteration with a for loop
// modify the string of each item
// push modified string into new array
// return a new array

const coffeeOrder = (array) => {
  let orders = []
  for(let i = 0; i < array.length; i++) {
    orders.push(`I would like a ${array[i]}`)
  }
  return orders
}

console.log(coffeeOrder(coffees))
// Output: 
// [
//   'I would like a latte',
//   'I would like a mocha',
//   'I would like a cold brew',
//   'I would like a black'
// ]
console.log(coffeeOrder(teas))
// Output: 
// [
//   'I would like a chai',
//   'I would like a matcha',
//   'I would like a earl gray',
//   'I would like a green'
// ]

// ___________________________________

// Using multiple arguements and params (no need for nested for loop):

// let size = ["small", "medium", "large", "xlarge"]
// const coffeeOrder = (drink, size) => {
//   let orders = []
//   for(let i = 0; i < drink.length; i++) {
//       orders.push(`I would like a ${size[i]} ${drink[i]}`)
//   }
//   return orders
// }

// console.log(coffeeOrder(coffees, size))
// // Output: 
// // [
// //   'I would like a latte',
// //   'I would like a mocha',
// //   'I would like a cold brew',
// //   'I would like a black'
// // ]
// console.log(coffeeOrder(teas, size))
// // Output: 
// // [
// //   'I would like a chai',
// //   'I would like a matcha',
// //   'I would like a earl gray',
// //   'I would like a green'
// // ]