// Challenge: Chunky Monkey
// Difficulty: Basic

/*
Write a function that splits an array (first argument) into groups the length of
size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let arrCopy = arr.slice(0);
  let chunkedArr = [];

  while (arrCopy.length) {
    let chunk = [];
    while (chunk.length < size && arrCopy.length) {
      chunk.push(arrCopy.shift());
    }
    chunkedArr.push(chunk);
  }

  return chunkedArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
