// Challenge: Diff Two Arrays
// Difficulty: Intermediate

/*
Compare two arrays and return a new array with any items only found in one of the two given
arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  // Imperative solution:
  // let newArr = [];
  // arr1.forEach(item => {
  //   if (arr2.indexOf(item) === -1) newArr.push(item);
  // });
  // arr2.forEach(item => {
  //   if (arr1.indexOf(item) === -1) newArr.push(item);
  // });
  // return newArr;

  // Declarative solution:
  let mergedArr = arr1.concat(arr2);
  return mergedArr.filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
