// Arrays

// - Arrays are a non-primitive data type that store collections of ordered data. 
// - Arrays contain any type of information as long as it is a valid data type
// - An array consists of the elements inside of brackets [ ] called bracket notation
// - Each element has a value that is separated by a comma.  
// - Each element is also indexed to track it’s placement inside the array starting with 0.  This is called zero indexed which means the first element in the array has an index of 0, the second element in the array has an index of 1 and so on.


// Accessing Specific Values Inside an Array

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

// console.log(learnStaff)
// // [ 'Sarah', 'Chelsea', 'Beau', 'Elyse' ]

// console.log(learnStaff[0])
// // "Sarah"

// console.log(learnStaff[2])
// // "Beau"

// console.log(learnStaff[9])
// // undefined



// Changing Elements

// learnStaff = ["Sarah", "Chelsea", "Beau", "Else"]

// console.log(learnStaff)
// // [ 'Sarah', 'Chelsea', 'Beau', 'Else' ]

// learnStaff[3] = "Elyse"
// console.log(learnStaff)
// // [ 'Sarah', 'Chelsea', 'Beau', 'Elyse' ]




// Length Property

// Length tells how many elements are in an array


// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

// console.log(learnStaff.length)
// // 4



// Built-in Methods
// Pieces of functionality to perform common tasks
// Oftentimes will need an arguement inside parethesis

// Mutators - setter methods change the array in some way
// Output is not always going to be an array


// .push(value)
// Adds a value onto the end of an array
// Value is passes as an arguement
// Output of this method is the length of the new array


// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

// console.log(learnStaff.push("Austin"))
// // 5

// console.log(learnStaff)
// // [ 'Sarah', 'Chelsea', 'Beau', 'Elyse', 'Austin' ]




// .pop()
// Removes the last value in an array
// Returns the value that was removed
// Nothing needs to be passed as an argument

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

// console.log(learnStaff.pop())
// // "Elyse"

// console.log(learnStaff)
// // [ 'Sarah', 'Chelsea', 'Beau' ]


// console.log(learnStaff.pop(0))
// // "Beau"
// console.log(learnStaff)
// // [ 'Sarah', 'Chelsea' ]



// .reverse()
// Does not need an arguement

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

// console.log(learnStaff)
// // [ 'Sarah', 'Chelsea', 'Beau', 'Elyse' ]

// console.log(learnStaff.reverse())
// // [ 'Elyse', 'Beau', 'Chelsea', 'Sarah' ]



// .sort()
// Alphebetize strings
// Numbers are sorted based on additional information (will expand at a different time)

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

// console.log(learnStaff.sort())
// // [ 'Beau', 'Chelsea', 'Elyse', 'Sarah' ]

// let numbers = [58, 93, 405, 20]
// console.log(numbers.sort())
// [ 20, 405, 58, 93 ]




// Accessors - getter methods retrieve a portion of the data - does not modify array
// To keep output if will need to be stored seperately as a variable


// .indexOf(value)
// Return the index number of the first instance of the value
// Return will be -1 if the value does not exist in the array

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]


// console.log(learnStaff.indexOf("Sarah"))
// // 0

// console.log(learnStaff.indexOf("sarah"))
// // -1

// console.log(learnStaff.indexOf("Joe"))
// // -1




// .slice(index)
// Creates a subset of the array
// Takes the argument of index and starts the subset and takes an optional arugment to end subset


// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse", "Charlean", "Austin"]

// console.log(learnStaff.slice(2))
// // [ 'Beau', 'Elyse', 'Charlean', 'Austin' ]

// console.log(learnStaff.slice(2, 4))
// [ 'Beau', 'Elyse' ]



// .concat()
// Merges two arrays together
// Can also add values to array without mutating

// let alphaTeam = ["Sarah", "Austin", "Charlean"]
// let bravoTeam = ["Sarah", "Beau", "Elyse"]

// let instructionTeam = alphaTeam.concat(bravoTeam)
// console.log(instructionTeam)
// // [ 'Sarah', 'Austin', 'Charlean', 'Sarah', 'Beau', 'Elyse' ]



// Strings to Arrays

// .split()
// Take an arguement of where to split the string

// let hello = "Hello Bravo class!"

// console.log(hello.split())
// // [ 'Hello Bravo class!' ]

// console.log(hello.split(""))
// // [
// //   'H', 'e', 'l', 'l', 'o',
// //   ' ', 'B', 'r', 'a', 'v',
// //   'o', ' ', 'c', 'l', 'a',
// //   's', 's', '!'
// // ]

// console.log(hello.split(" "))
// [ 'Hello', 'Bravo', 'class!' ]




// Array to String
// .join()
// Takes an arguement that determines what is in between each character in the string

// let hello = [ 'Hello', 'Bravo', 'class!' ]

// console.log(hello.join())
// // "Hello,Bravo,class!"

// console.log(hello.join(""))
// // "HelloBravoclass!"

// console.log(hello.join(" "))
// // "Hello Bravo class!"



// Array Destructuring
// Allows for individual assignment of array values to variables

// let [firstName, lastName] = ["Bruce", "Wayne"]

// console.log(firstName)
// // Bruce
// console.log(lastName)
// Wayne

