/*
Name: Array Zip Sum

Link: https://challenge.makerpass.com/c/31e70994c4e4734a5792a3ff7ba85f8c

Description:
Given two arrays of negative/positive integers, return a new array such that each element
at index n is the sum of the two elements from the other arrays at their index n’s.

Examples:
  Input              |  Output
--------------------------------------------
  xs: [10, 20, 30]   |  [11, 22, 33]
  ys: [1, 2, 3]      |
--------------------------------------------
  xs: [100, 1]       |  [150, 6]
  ys: [50, 5]        |
--------------------------------------------
  xs: [10, 20, 30]   |  [11, 22]
  ys: [1, 2]         |
--------------------------------------------
  xs: [10, 20]       |  [11, 22]
  ys: [1, 2, 3]      |
*/

// Refactored Solution:
const zipSum = (xs, ys) => {
  return xs.slice(0, ys.length).map((num, i) => num + ys[i]);
}

// Naive Solution:
const zipSum = (xs, ys) => {
  let sumArr = [];
  for(let i = 0; i < Math.min(xs.length, ys.length); i++) {
    sumArr.push(xs[i] + ys[i]);
  }
  return sumArr;
}
