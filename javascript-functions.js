// Javascript functions

// Functions are reusable code machines.
// Always produce a output.
// A function without the keyword 'return' will log 'undefined'.
// Used for action on our code.
// Functions are made to be reusable and Dynamic.

// Function Expressions
//_________________________

// const makeCoffee
// - variable declaration
// - casing camelCase
// - name should be descriptive

const makeCoffee = () => {

}
// - Equal sign for variable declaration
// - Parentheses 
// - Arrow syntax
// - Executable block of code
// - Function expression

// Output and Invocation
//________________________

const makeCoffee = () => {
  return "Coffee is made!"
}
// console.log(makeCoffee()) 
// console.log(makeCoffee()) 
// console.log(makeCoffee()) 
// console.log(makeCoffee())
//-->
// Coffee is made!
// Coffee is made!
// Coffee is made!
// Coffee is made!

// Parameters and Arguments
//_________________________

const makeCoffee = (coffeeType) => {
  return `Enjoy your ${coffeeType}!`
}
// console.log(makeCoffee("latte")) 
// console.log(makeCoffee("chai")) 
// console.log(makeCoffee("espresso")) 
//-->
// Enjoy your latte!
// Enjoy your chai!
// Enjoy your espresso!

// Pseudo Coding

// ? Build out a function that takes a coffeeType and a size and returns a statement with the appropriate price.

// Pseudo Code Example:
// create a function called makeCoffee
// input - coffeeType, size
// use conditional statement to make an evaluation on the size.
// if size evaluates to large, it will cost $5.
// if size evaluates to medium, it will cost $4.
// if size evaluates to small, it will cost $3.

const makeCoffee = (coffeeType, size) => {
  if(size === "large"){
    return `Your ${size} ${coffeeType} is $5`
  }else if(size === "medium"){
    return `Your ${size} ${coffeeType} is $4`
  }else if(size === "small"){
    return `Your ${size} ${coffeeType} is $3`
  }
}
console.log(makeCoffee("espresso", "small")) 