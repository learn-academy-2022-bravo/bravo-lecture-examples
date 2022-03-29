// Setup 
// $ git clone https://github.com/learn-academy-2022-bravo/javascript-foundations-challenges.git
// $ cd javascript-foundations-challenges
// $ git checkout -b jest-initials1-initials2
// $ mkdir jest-student1-student2
// $ cd jest-student1-student2
// $ touch jest.test.js
// Open the Jest folder in a text editor
// $ yarn add jest

// Testing consider 3 things
// Input
// The results you received from your function
// Expected output

// Jest - automated, unit testing

// Red-green refactor process

// -----RED-----
// ******test*****
// 1: Write the test first!
// A DESCRIBE METHOD that lists the name of the function
describe("soup", () => {
  // IT METHOD explains what the function does
  it("returns a string that says Aloha, Bravo, here's some soup!", () => {
    // EXPECT METHOD provides an argument of the function call and expected output appended by a jest matcher
    expect(soup()).toEqual("Aloha, Bravo, here's some soup!")
  })
})
// ******fail the test*****
// 2: Run your testing suite to see a failing test
// $ yarn jest

// ******potential error from VS code*****
// // Sometimes VS code adds some helper code "yargs" for jest describe method and you may see the following code appear at the top of your screen after you run a test in your suite:
// const { it, expect } = require("@jest/globals")
// const { describe } = require("yargs")
// After commenting out or deleting the yargs, run the test suite again

// ******failure statement from test suite*****
// Good failure
// FAIL  ./jest.test.js
// soup
//   ✕ returns a string that says Aloha, Bravo, here's some soup!

// ● soup › returns a string that says Aloha, Bravo, here's some soup!

//   ReferenceError: soup is not defined


// -----GREEN----
// 3: Write the code
// ******pseudocode*****
// create a function name soup
// input - none because the function is producing a message when call
//output - a string "Aloha, Bravo, here's some soup!"
// ******function*****
const soup = () => {
  return "Aloha, Bravo, here's some soup!"
}
// ******pass the test*****
// 4: Run your testing suit to see your test pass
// $ yarn jest
// ******pass statement from test suite*****
// PASS  ./jest.test.js
// soup
//   ✓ returns a string that says Aloha, Bravo, here's some soup! (1 ms)

// ------REFACTOR-----
// 5: Refactor if necessary
// This is known as Red-Green Refactor

// Write a test function that logs "that is soup" based on yes or no input.
// RED

describe("isThatSoup", () => {
  it("logs 'that is soup' based on yes or no input", () => {
    expect(isThatSoup("yes")).toEqual("that is soup")
    expect(isThatSoup("no")).toEqual("that is not soup")
  })
})

// Yes, I failed
// isThatSoup
// ✕ logs 'that is soup' based on yes or no input

// ● isThatSoup › logs 'that is soup' based on yes or no input

// ReferenceError: isThatSoup is not defined

// GREEN
// ****Pseudocode*****
// function name isThatSoup
// input - datatype Boolean value
// output - datatype string
// methods to be used - conditionals

const isThatSoup = (string) => {
  if(string === "yes") {
    return "that is soup"
  } else {
    return "that is not soup"
  } 
}

// Write a function that will take in two arrays and add the second one to the end of the first array. Then place it in alphabetical order.

describe("lotsOfSoup", () => {
  it("take in two arrays and add the second one to the end of the first array. Then place it in alphabetical order.", () => {

    var soups = ["tomato", "chicken noodle", "clam chowder", "lobster bisque", "corn chowder", "broccoli chowder"]
    var bowl = ["french onion"]
    // expected output: ["broccoli chowder", "chicken noodle", "clam chowder", "corn chowder", "french onion", "lobster bisque", "tomato"]
    var goodSoup = ["broccoli chowder", "chicken noodle", "clam chowder", "corn chowder", "french onion", "lobster bisque", "tomato"]

    expect(lotsOfSoup(soups, bowl)).toEqual(goodSoup)
  })
})

// Good failure
// lotsOfSoup
// ✕ take in two arrays and add the second one to the end of the first array. Then place it in alphabetical order.

// ● lotsOfSoup › take in two arrays and add the second one to the end of the first array. Then place it in alphabetical order.

// ReferenceError: lotsOfSoup is not defined

// Pseudocode
// function name lotsOfSoup
// input - datatype array, 2 arrays
// output - one array in alphabetical order
// methods to be used - concat to combine the arrays, sort for alphabetical order

// const lotsOfSoup = (array1, array2) => {
//   let allSoups = array1.concat(array2).sort()
//   return allSoups
// }

// PASS  ./jest.test.js
// soup
//   ✓ returns a string that says Aloha, Bravo, here's some soup! (1 ms)
// isThatSoup
//   ✓ logs 'that is soup' based on yes or no input
// lotsOfSoup
//   ✓ take in two arrays and add the second one to the end of the first array. Then place it in alphabetical order.

// REFACTOR - DRY(DON'T REPEAT YOURSELF)
const lotsOfSoup = (array1, array2) => {
  return array1.concat(array2).sort()
}
