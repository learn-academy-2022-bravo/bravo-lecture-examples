// JavaScript Objects 3/30/2022

// Primitive data types
// - string
// - number
// - symbol - unique identifier
// - boolean
// - null
// - undefined

// Arrays - collection
// Objects - collection

// {key: "value"}
// {symbol: "data type"}

// let myObject = {key: "value"}
// let myObject = {key: "value", key2: "another value", key3: true, key4: 4}
// console.log(myObject)
// [3, 4, 5, 6] - select one item via index
// console.log(myObject.key2) - select one value by using "dot notation" and referencing the key

// console.log(myObject.key3)


let breakfast = {
  item1: "waffles",
  item2: "oatmeal",
  item3: "eggs",
  item4: "protein bar",
  fruit: ["strawberry", "blueberry", "orange"],
  beverage: {
    bev1: "coffee",
    bev2: "English breakfast tea",
    bev3: "orange juice"
  }
}

// console.log(breakfast.item1)
// console.log(breakfast.fruit[1])
// console.log(breakfast.beverage.bev1)
// console.log(breakfast.beverage.bev2)
// console.log(breakfast.beverage.bev3)

// Destructuring - assigning a key the pathway through an object
// let { bev1, bev2, bev3 } = breakfast.beverage
// console.log(bev1)
// console.log(bev2)
// console.log(bev3)



// Methods - function that belongs to an object
// .toUpperCase() - belongs to the data type string, method

// Objects - data and behavior - information, methods

let numberObjects = {
  num1: 5,
  num2: 10,
  num3: 15,
  addUp: function() {
    return this.num1 + this.num2 + this.num3
  }
}
// console.log(numberObjects)
// console.log(numberObjects.num1)
// console.log(numberObjects.addUp) // [Function: addUp]
// console.log(numberObjects.addUp()) // 30


// this - keyword in JavaScript that referenced the object inside itself

// h1 {
//   color: "blue";
//   background: "green"
// }


let pets = [
  {name: "Dozer", type: "pitbull", age: 7},
  {name: "Moxie", type: "lab", age: 3},
  {name: "Ozzy", type: "husky", age: 5}
]

// console.log(pets.length) //3
// console.log(pets[1].name) // Moxie
// console.log(pets[0].name)


// create a function that return an array of pet names

// create a function - petNames
// parameter - array
// iteration - HOF - map - the length of the array will be the same
// use dot notation to reference the name key and get the value

const petNames = (array) => {
  return array.map(obj => {
    return obj.name
  })
}
// console.log(petNames(pets))



let nasa = {
  "id": 102693,
  "sol": 1000,
  "camera": {
    "id": 20,
    "name": "FHAZ",
    "rover_id": 5,
    "full_name": "Front Hazard Avoidance Camera"
  },
  "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
  "earth_date": "2015-05-30",
  "rover": {
    "id": 5,
    "name": "Curiosity",
    "landing_date": "2012-08-06",
    "launch_date": "2011-11-26",
    "status": "active"
  }
}

console.log(nasa.id)

// JSON - JavaScript Object Notation
