// Challenge: Return Largest Numbers in Arrays
// Difficulty: Basic

/*
Return an array consisting of the largest number from each provided sub-array. For simplicity,
the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member
with array syntax arr[i].
*/

function largestOfFour(arr) {
  // let maxNums = [];
  // for (let i = 0; i < arr.length; i++) {
  //   let maxNum = arr[i][0];
  //   for (let j = 0; j < arr[i].length; j++) {
  //     maxNum = Math.max(arr[i][j], maxNum);
  //   }
  //   maxNums.push(maxNum);
  // }
  // return maxNums;

  // Refactored solution:
  let maxNums = [];
  arr.forEach(subArr => {
    let maxNum = subArr.reduce((acc, curr) => Math.max(acc, curr));
    maxNums.push(maxNum);
  });
  return maxNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
