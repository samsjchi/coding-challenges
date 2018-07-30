/*
Name: Filter Length

Link: https://challenge.makerpass.com/c/18af8790009f63d2965d16240eff7c78

Description:
Given a length (number) and an array of strings, return all strings that are greater
than or equal to the given length.

DO NOT use .filter() in your solution.

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

Examples:
  Input                        |  Output
---------------------------------------------------------------
  length: 3                    |
  array:                       |  ["abc", "abcd"]
  ["a", "ab", "abc", "abcd"]   |
---------------------------------------------------------------
  length: 2                    |
  array:                       |  ["hello"]
  ["x", "hello", "z"]          |
*/

const filterLength = (length, array) => {
  let results = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i].length >= length) results.push(array[i]);
  }
  return results;
}
