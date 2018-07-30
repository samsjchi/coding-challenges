/*
Name: Sum

Link: https://challenge.makerpass.com/c/66b011e68b52e330f6ae9152fe20cb77

Description:
Given an array of numbers, return the sum of those numbers.

DO NOT use numbers.reduce()

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

Examples:
  Input                   |  Output
------------------------------------------------------
  numbers: [10, 20, 30]   |  60
  numbers: []             |  0
*/

const sum = (numbers) => {
  let sum = 0;
  numbers.forEach(num => sum += num);
  return sum;
}
