// CLASS INHERITANCE

// Parent class 
  // - more generic

// Child class 
  // - more specific
  // child class extends from parent class

  class Animal {
    constructor(animalName) {
      this.name = animalName
      this.isAlive = true
      this.sleeping = false
    }
    sleep() {
      this.sleeping = true
    }
  }

// ______________________

class Dog extends Animal {
  constructor(animalName) {
    super(animalName)
    this.playFetch = true
    this.barks = 0
  }
  bark(number) {
    this.barks = number
  }
}

let bruno = new Dog("Bruno")
console.log(bruno)
// Output: Dog { name: 'Bruno', isAlive: true, playFetch: true }

// bruno.sleep()
// console.log("Go to sleep Bruno:")
// console.log(bruno)
// Dog {
//   name: 'yellow lab',
//   isAlive: true,
//   sleeping: true,
//   playFetch: true
// }

bruno.bark(10)
console.log(bruno)
// Dog {
//   name: 'Bruno',
//   isAlive: true,
//   sleeping: false,
//   playFetch: true,
//   barks: 10
// }

// _______________________

class Bird extends Animal {
  constructor(animalName) {
    super(animalName)
    this.hasWings = true
    this.flying = false
  }
  fly() {
    this.flying = !this.flying
  }
}

let donald = new Bird("Donald")
console.log(donald)
// Output: Bird { name: 'Donald', isAlive: true, sleeping: false, hasWings: true }

// donald.sleep()
// console.log(donald)

donald.fly()
console.log(donald)

donald.fly()
console.log(donald)