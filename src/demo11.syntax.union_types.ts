/**
 * * Union types
 */

const printObj = (obj : number | string) : void => {
  if(typeof obj === 'string') 
    console.log(obj.toUpperCase())
  else
   console.log(obj)
}

printObj(100) 
printObj('Hello world')


//? compare Array[string] with String

const getName = (name : string[] | string) : void => {
  if(Array.isArray(name))
    console.log(`Name is array string: ${name}`)
  else 
    console.log(`Name: ${name}`)
}

getName(['hello', 'World', 'Petter', 'Marry'])
getName('NDHuy')