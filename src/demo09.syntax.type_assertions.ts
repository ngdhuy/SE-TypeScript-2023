/**
 * * Type assertion
 */

let str_value     : unknown   = '4.2'
console.log(str_value, typeof(str_value))

let value         : number    = parseFloat(str_value as string)
console.log(value, typeof(value))