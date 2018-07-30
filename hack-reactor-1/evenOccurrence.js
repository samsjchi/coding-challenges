/*
Name: Even Occurrence

Link: https://challenge.makerpass.com/c/bca62ef63d8285f178ae4a4c895828d8

Description:
Find the first item that occurs an even number of times in an array. Remember to handle multiple
even-occurrence items and return the first one. Return null if there are no even-occurrence items.

Examples:
  Input                            |  Output
-----------------------------------------------------------------------
  arr:                             |
  [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]    |  2
-----------------------------------------------------------------------
  arr:                             |
  [ "cat", "dog", "dig", "cat" ]   |  "cat"
*/

const evenOccurrence = (arr) => {
  let counts = {};
  arr.forEach(countOccurrences);
  return findFirstEven(arr, counts);

  // Functions
  function countOccurrences(num) {
    if(!counts[num]) counts[num] = 0;
    counts[num]++;
  }

  function findFirstEven(arr, counts) {
    for(let i = 0; i < arr.length; i++) {
      if(counts[arr[i]] % 2 === 0) return arr[i];
    }
    return null;
  }
};
