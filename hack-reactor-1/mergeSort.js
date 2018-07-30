/*
Name: Merge Sort

Link: https://challenge.makerpass.com/c/0708d039ca960f0803642df02885f53e

Description:
Implement a function that sorts an array of numbers using the “merge sort” algorithm.

Merge sort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.

Merge sort is an optimized sorting algorithm which is a common choice to implement sort
methods in standard libraries as an alternative to quick sort or heap sort. For example,
Firefox’s Array.sort method uses a tuned merge sort; the WebKit engine used by Chrome and
Safari uses quick sort for numeric arrays, and merge sort for arrays of strings.
*/

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  let middle = parseInt(arr.length / 2);
  let left   = arr.slice(0, middle);
  let right  = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    (left[0] <= right[0]) ? result.push(left.shift()) : result.push(right.shift());
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}
