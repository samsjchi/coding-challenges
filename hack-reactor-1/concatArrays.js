/*
Name: Concat Arrays

Link: https://challenge.makerpass.com/c/735ea412fb6fc90ffa3c2b54983a88ce

Description:
Given an array of arrays, return those arrays concatenated together.

DO NOT use arrays.reduce() or Function.prototype.apply

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

Examples:
  Input                               |  Output
-----------------------------------------------------------------------------
  arrays: [ [10, 20], [30], [] ]      |  [10, 20, 30]
  arrays: [ [22], [33, [44]], [55] ]  |  [22, 33, [44], 55]
  arrays: []                          |  []
*/

const concatArrays = (arrays) => {
  let result = [];
  arrays.forEach(arr => arr.forEach(item => result.push(item)));
  return result;
}
