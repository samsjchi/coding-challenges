/*
Name: Find Divisible

Link: https://challenge.makerpass.com/c/944fcb220015896ff8a3a8a8b43a095e

Description:
Given a divider number and an array of numbers, return true if the array contains a number evenly divisible by the divider, and false otherwise.

DO NOT use array.find()

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

Examples:
  Input             |  Output
------------------------------------------
  str: 5            |  true
  array: [8, 10]    |
------------------------------------------
  str: 5            |  false
  array: [8, 11]    |
*/

const findDivisible = (divider, array) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== 0 && array[i] % divider === 0) return true;
  }
  return false;
}
