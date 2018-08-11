// Challenge: Smallest Common Multiple
// Difficulty: Intermediate

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also
evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  let n;
  let nums = [];
  let smallestCommonMultiple = 0;
  let multiplier = 1;

  arr.sort((a, b) => b - a);

  for (let i = arr[0]; i >= arr[1]; i--) {
    nums.push(i);
  }

  do {
    smallestCommonMultiple = nums[0] * nums[1] * multiplier;
    for (n = 2; n < nums.length; n++) {
      if (smallestCommonMultiple % nums[n] !== 0) {
        break;
      }
    }
    multiplier++;
  } while (n !== nums.length);

  return smallestCommonMultiple;
}


smallestCommons([1,5]);
