/*
Name: Array Middle

Link: https://challenge.makerpass.com/c/e827af0e0761955bfd951e4cd01d6bed

Description:
Given an array of negative/positive integers, return the element in the center
position of the array.

If the array has an even number of elements, return the average of the two
middle elements instead.

Examples:
  Input                      |  Output
-----------------------------------------------------------
  numbers: [200, 5, 100]     |  5
  numbers: [10, 20, 30, 40]  |  25
*/

const middle = (numbers) => {
  if(numbers.length % 2) {
    return numbers[Math.floor(numbers.length / 2)];
  } else {
    let leftNum = numbers[(numbers.length / 2) - 1];
    let rightNum = numbers[numbers.length / 2];
    return (leftNum + rightNum) / 2;
  }
}
