/*
Name: Fizz Buzz

Link: https://challenge.makerpass.com/c/efc7c623e72ee41a7c988a028c1d6e15

Description:
Fill in your function, so that if the number that was passed in to the
function is divisible by 3 it returns the value “Fizz”, if the value is
divisible by 5 it returns “Buzz”, if the value is divisible by both 3 and 5
return the value “FizzBuzz”, and finally if the number is not divisible by
any of those just return the value.

Examples:
   Input      |   Output
------------------------------
   val: 3     |   "Fizz"
   val: 5     |   "Buzz"
   val: 30    |   "FizzBuzz"
   val: 13    |   13
*/

// ES6 Solution:
const FizzBuzz = (val) => {
  return (val % 15 === 0) ? 'FizzBuzz' :
         (val % 3 === 0) ? 'Fizz' :
         (val % 5 === 0) ? 'Buzz' :
         val;
}

// ES5 Solution:
function FizzBuzz(value) {
  if(value % 15 === 0) {
    return 'FizzBuzz';
  } else if(value % 3 === 0) {
    return 'Fizz';
  } else if(value % 5 === 0) {
    return 'Buzz';
  } else {
    return value;
  }
}
