// Challenge: Drop It
// Difficulty: Intermediate

/*
Given the array arr, iterate through and remove each element starting from the first element
(the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be
returned as an empty array.
*/

function dropElements(arr, func) {
  let arrCopy = arr.slice(0);
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      arrCopy.shift();
    } else {
      break;
    }
  }
  return arrCopy;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
