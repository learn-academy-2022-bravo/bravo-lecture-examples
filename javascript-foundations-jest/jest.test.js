// Test Driven Development (TDD) - break application, web development into smaller approachable tasks, safely make code

// NOTE: $ means terminal command
// NOTE: <old-branch> is just specifying to but the actual branch name you created. Do not include <> just the name that you made when you created the branch.

// Setup 
// $ cd javascript-foundations-challenges

// CHECK THAT YOUR WORK TREE IS CLEAN
// Check what branch you are on
// $ git branch

// Make sure no extra files have been changed. Follow the process in the syllabus if you need to push information to git Hub 
// $ git status
// https://github.com/learn-academy-2022-bravo/Syllabus/blob/main/github/pairing-with-github.md
// Start at the section that begins with the following sentence `After the first driver is done with their portion, follow the git flow to push your code up to GitHub:`

// MAKE SURE YOUR LOCAL MACHINE IS UP TO DATE WITH GITHUB
// $ git checkout main
// $ git pull origin main

// After you have ensured that your local machine is up to date with gitHub proceed to preparing for the jest project

// CREATE A NEW BRANCH
// $ git checkout -b jest-initials1-initials2

// CREATE A REPOSITORY TO HOLD YARN DEPENDECIES FOR JEST TEST SUITE
// $ mkdir jest-student1-student2
// $ cd jest-student1-student2
// You will run yarn commands within this project folder

// CREATE A TEST SCRIPT FILE
// $ touch jest.test.js

// ADD DEPENDENCIES/CODE SNIPPETS FOR YOUR JEST TEST SUITE
// $ yarn add jest

// CODE
// Open the Jest folder in a text editor

// Testing considers 3 things
// - Input
// - The results you received from your function
// - Expected output

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


// _______________________________
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

// PASS  ./jest.test.js
// soup
//   ✓ returns a string that says Aloha, Bravo, here's some soup! (1 ms)
// isThatSoup
//   ✓ logs 'that is soup' based on yes or no input



// _______________________________
// Write a function that will take in two arrays and add the second one to the end of the first array. Then place it in alphabetical order.

// RED
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

// GREEN
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



// PUSHING CHANGES TO GIHUB
// $ cd ..
// This terminal command helps you leave the testing repository (jest-student1-student2) and go to the main repository (javascript-foundations-challenges) You will run your git commands in the javascript-foundations-challenges repository.

// $ git status
// If you see files that you do not recognize, then reach out for help. You should only see the folder you add to this repository.

// $ git add .
// $ git commit -m "completed jest challenges"
// $ git push origin jest-initials1-initials2 

// MAKE A PULL REQUEST IN GITHUB
// https://github.com/learn-academy-2022-bravo/Syllabus/blob/main/github/pairing-with-github.md
// Only need to perform two steps from Merging to Main section
// select `Compare & pull request` 
// select `Create pull request`

// AFTER APPROVAL--IN GITHUB
// follow the other steps on Merging to Main section in GitHub

// AFTER MERGING AND DELETING BRANCH IN GITHUB--IN THE TERMINAL
// Ensure you are in the correct directory
// $ pwd

// Delete the old branch
// $ git checkout main
// $ git pull origin main
// $ git branch -d <old-branch>