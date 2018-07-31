// Challenge: Slice and Splice
// Difficulty: Basic

/*
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second
array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  let arr1Copy = arr1.slice(0);
  let arr2Copy = arr2.slice(0);
  let index = n;

  arr1Copy.forEach(num => {
    arr2Copy.splice(index, 0, num);
    index++;
  });

  return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
