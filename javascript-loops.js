// Javascript Loops

//iteration -
  //doing something multiple times until, a condition is met.

//for loop - 
  //is a tool for iteration.  It has 3 arguments: (starting point, ending point, how to get from start - stop).

  //let - 
    //is a variable declaration.  (like var), re-assignment.  
  
  //i (index) - 
    //the location of a value in a string or array.  

//value -
  //data a location.  CAn boolean, string, numbers, even be another array.

//scope - 
  //are where variables are accessible in different parts of the code base.

//local scope -
  //variables that are only accessible within a code block.

//Global scope -
  //variables that are accessible outside a code block.

//increment and decrement
  //tools for counting used often in iteration

//Anatomy of a For Loop
  //- starting point
  //- ending point
  //- how to get from start to end

// for(){}
// for(loop){code block}
// for(1st argument, 2nd argument, 3rd argument){do something here}

// longhand example:
for(let index = 0; index < 10; index++) {
  const element = array[index];
}

// shorthand example:
for(let i = 0; i <= 10; i++){
  console.log(i)
}
___________________________

// Infinite loop
for(let i = 1; i > 0; i++ ) {
  console.log(i)
}
// ________________________________
// TO EXIT LOOP 'CONTROL C'

// decrement
for(let i = 10; i > 0; i--){
  console.log(i)
}
//________________________________


const numArray = [5, 6, 7, 8, 9]

for(let i = 0; i < numArray.length; i++){
  console.log("index", i)
  console.log("value", numArray[i])
}
// ______________________________

// Conditional If
const numArray = [5, 6, 7, 8, 9]

for(let i = 0; i < numArray.length; i++){
  if(numArray[i] % 2 !== 0){
    console.log(`${numArray[i]} is an odd number!`)
  }
}
-->
5 is an odd number!
7 is an odd number!
9 is an odd number!
// ___________________________________
// Conditional If/Else
const numArray = [5, 6, 7, 8, 9]

for(let i = 0; i < numArray.length; i++){
  if(numArray[i] % 2 !== 0){
    console.log(`${numArray[i]} is an odd number!`)
  }else{
    console.log(`${numArray[i]} is an even number!`)
  }
}
// -->
// 5 is an odd number!
// 6 is an even number!
// 7 is an odd number!
// 8 is an even number!
// 9 is an odd number!