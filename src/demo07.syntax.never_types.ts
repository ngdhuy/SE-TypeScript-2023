/**
 * * never - is return type of Exception function (return or not return)
 */

const show_error = (message : string) : never => {
  throw new Error(message)
}

const calculate = () => {
  try {
    show_error('Something is failed')
  } catch (e) {
    console.error(e)
  }
}

calculate()