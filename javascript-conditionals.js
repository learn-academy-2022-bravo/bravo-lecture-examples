// JavaScript Conditionals 3/23/2022

// Conditional statements/decision trees/if-else statements


// Evaluations - true/false, return a Boolean value

// Equality
console.log(7 === 3 + 4)

// Abstraction: using variables to hold data
var myFavNum = 7
console.log(myFavNum === 3 + 4)


// Relational operators
console.log(5 > 4)
console.log(6 <= 3 + 3)
console.log(5 > 9)

// Logical operators
console.log(5 > 4 && myFavNum === 3 + 4)
console.log(5 > 9 && 5 > 4)
console.log(5 > 9 || 5 > 4)


// Conditional statements

// if - keyword, takes an evaluation
// executable block of code - {}

// if the evaluation is true - execute the code
if(myFavNum === 3 + 4) {
  console.log("it is true!")
}

// if the evaluation is false - do nothing
if(myFavNum === 3 + 8) {
  console.log("it is true????")
}

// else is a keyword in JavaScript, does not take an evaluation
if(myFavNum === 3 + 8) {
  console.log("it is true!")
} else {
  console.log("I am the else!")
}

var myColor = "blue"

if(myColor === "pink") {
  console.log("Pink is great.")
} else if(myColor === "green") {
  console.log("Green is wonderful.")
} else if(myColor === "blue") {
  console.log("Blue is soothing.")
} else if(myColor === "yellow") {
  console.log("Yellow is uplifting!")
} else if(myColor === "blue") {
  console.log("I am another blue!")
}


// evaluations!
// if - keyword, takes an evaluation, and if the evaluation is true, execute a block of code
// else if - keyword, takes an evaluation, if true, execute a block of code
// else - keyword, last in the chain, no evaluation
// only one outcome
