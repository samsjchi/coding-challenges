/*
Name: Array Max

Link: https://challenge.makerpass.com/c/29971f4cd8d65b137daee4c6ff0f212a

Description:
Given an array of negative/positive integers, find the largest element.
DO NOT use Math.max.

Examples:
   Input                   |  Output
--------------------------------------------------------
   numbers: [20, 30, 10]   |  30
   numbers: [5]            |  5
*/

const max = (numbers) => {
  return numbers.reduce((max, num) => {
    return (max > num) ? max : num;
  });
}
