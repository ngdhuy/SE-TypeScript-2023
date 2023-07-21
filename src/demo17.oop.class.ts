/**
 * * class
 */

//? define class without constructor
class Person {
  name! : string    //option type
}

const person : Person = new Person()
console.log(person)

person.name = 'Henry'
console.log(person)

//? readonly 
class School {
  readonly name : string = 'RMIT'

  // only use constructor to initial assign value to readonly property
  constructor(name? : string) {
    if(name !== undefined)
      this.name = name
  }

  err() {
    console.log('Cannot access readonly property Name')
  }
}

const sc_1 : School = new School()
console.log(sc_1)

const sc_2 : School = new School('MIT')
console.log(sc_2)

//? constructor
class Point2D {
  x : number
  y : number

  // normal constructor
  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  //! multiple constructor not allowed
}

const p_1 : Point2D = new Point2D()
console.log(p_1)

const p_2 : Point2D = new Point2D(3, 4)
console.log(p_2)
