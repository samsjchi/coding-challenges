// Challenge: Sorted Union
// Difficulty: Intermediate

/*
Write a function that takes two or more arrays and returns a new array of unique values in the
order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order,
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be
sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
  let args = [].slice.call(arguments);
  let mergedArr = args.reduce((acc, curr) => acc.concat(curr));
  let uniqueArr = [];

  mergedArr.forEach(item => {
    if (!uniqueArr.includes(item)) uniqueArr.push(item);
  });

  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
