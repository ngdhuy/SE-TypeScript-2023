/**
 * * define main function for module with libs
 */

// import * from './demo23.modules.libs'
import sayHello, { PI, double, Shape as ShapeType } from "./demo23.modules.libs"

sayHello()
console.log(`PI = ${PI}`)
console.log(`Double value of 4 = ${double(4)}`)

const shape : ShapeType = new ShapeType('Green')
console.log(shape.color)