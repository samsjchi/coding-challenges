/*
Name: Bubble Sort

Link: https://challenge.makerpass.com/c/00fe9f30e7dd0d83a4f2f3803907c4db

Description:
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

o If the first element is greater than the second element, it swaps the two.
o It then compares the second to the third, and the third to the fourth, and so on.
  - In this way, the largest values ‘bubble’ to the end of the array.
o Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.

Implement a function that takes an array and sorts it using this technique.

NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
*/

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if(array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}
