/*
Name: Search String

Link: https://challenge.makerpass.com/c/4697eb9176c6ff38d3d87f7794e13ed6

Description:
Given a string and an array of strings, return true if the string exists in the
array, and false if it does not.

DO NOT use .includes() in your solution.

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using
a for loop.

Examples:
  Input                    |  Output
--------------------------------------------------------
  str: "x"                 |  true
  array: ["a", "x", "c"]   |
--------------------------------------------------------
  str: "x"                 |  false
  array: ["a", "b", "c"]   |
*/

const searchString = (str, array) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === str) return true;
  }
  return false;
}
