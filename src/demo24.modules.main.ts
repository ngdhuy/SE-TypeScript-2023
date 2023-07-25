/**
 * * define main function using namespace modules
 */

/// <reference path="./demo24.modules.namespace.ts" />
import { MyLibs } from "./demo24.modules.namespace";

const fraction : MyLibs.Fraction = new MyLibs.Fraction(1, 2)
console.log(fraction.toString())
console.log(`PI = ${MyLibs.PI}`)
console.log(`Triple of 4 = ${MyLibs.triple(4)}`)