/*
Name: Find Even

Link: https://challenge.makerpass.com/c/45079077df1ff1328aca79b789366901

Description:
Given an array of numbers, return all even numbers from the array.

DO NOT use .filter() in your solution.

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

Examples:
  Input                       |  Output
-------------------------------------------------------------
  numbers: [10, 20, 25, 30]   |  [10, 20, 30]
*/

const findEven = (numbers) => {
  let results = [];
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) results.push(numbers[i]);
  }
  return results;
}
