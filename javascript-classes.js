// Javascript Classes
// - PascalCase
// - constructor() - JS method specifically for defining variables that belong to a class.
// - new - keyword in JS that instantiates a class (creates an object), like "invoking a function"
// - Class:
//    - is used as a template for declaring and creating the objects.
//    - only needs to be declared once, vcreating the object.
//    - are dynamic

// - Objects:
//    - is an instance of a class.
//    - can be created as many times as per required.
//    - are hard-coded

// Function:
//    - is a code block written to perform some specific set of tasks

// Method:
//    - is a property of an object that contains a function definition.  Methods are functions stored as object properties
//    - consists of a code that can be called by the name of its object and its method name using dot notation or square bracket notation.

// Class Anatomy

// class DoingMath {
//   constructor() {
//     this.num1 = 5,
//     this.num2 = 10,
//     this.num3 = 15
//   }
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }

// console.log(new DoingMath)
//_____________________________-

// class DoingMath {
//   constructor() {
//     this.num1 = 5,
//     this.num2 = 10,
//     this.num3 = 15
//   }
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }

// const math = new DoingMath
// console.log(math.num1)
// console.log(math.addUp())
// //-->
// // 5
// // 30
//______________________________

// class DoingMath {
//   constructor() {
//     this.num1 = 5,
//     this.num2 = 10,
//     this.num3 = 15
//   }
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }

// const math1 = new DoingMath
// console.log(math1)

// const math2 = new DoingMath
// console.log(math2)
// DoingMath { num1: 5, num2: 10, num3: 15 }
// DoingMath { num1: 5, num2: 10, num3: 15 }
//________________________

// class DoingMath {
//   constructor(num1, num2, num3) {
//     this.num1 = num1,
//     this.num2 = num2,
//     this.num3 = num3
//   }
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }

// const math1 = new DoingMath(5, 10, 15)
// console.log(math1)
// console.log(math1.addUp())

// const math2 = new DoingMath(3, 7, 2)
// console.log(math2)
// console.log(math2.addUp())
// //-->
// DoingMath { num1: 5, num2: 10, num3: 15 }
// 30
// DoingMath { num1: 3, num2: 7, num3: 2 }
// 12
//__________________________________________

// class DoingMath {
//   constructor(num2, num3) {
//     this.num1 = 5,
//     this.num2 = num2,
//     this.num3 = num3
//   }
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }

// const math1 = new DoingMath(10, 15)
// console.log(math1)
// console.log(math1.addUp())
// //-->
// // DoingMath { num1: 5, num2: 10, num3: 15 }
// // 30
//__________________________________

// class DoingMath {
//   constructor(num2, num3) {
//     this.num1 = 5,
//     this.num2 = num2,
//     this.num3 = num3
//   }
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
//   largestNum() {
//     return Math.max(this.num1, this.num2, this.num3)
//   }
// }

// const math1 = new DoingMath(10, 15)
// console.log(math1.largestNum())

// const math2 = new DoingMath(2, 3)
// console.log(math2.largestNum())
// //-->
// // 15
// // 5
//________________________________

// class User {
//   constructor(firstname, lastname, credit) {
//     this.firstname = firstname,
//     this.lastname = lastname,
//     this.credit = credit
//   }
//   getFullName() {
//     let FullName = `${this.firstname} ${this.lastname} has ${this.credit} credits.`
//     return FullName
//   }
// }

// const beau = new User("Beau", "Hale", 33)
// console.log(beau)
// console.log(beau.getFullName())
// //-->
// // User { firstname: 'Beau', lastname: 'Hale', credit: 33 }
// //Beau Hale has 33 credits.
