// Challenge: Find the Longest Word in a String
// Difficulty: Basic

/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  // Imperative solution:
  // let words = str.split(' ');
  // let maxLength = 0;

  // for (let i = 0; i < words.length; i++) {
  //   if (words[i].length > maxLength) {
  //     maxLength = words[i].length;
  //   }
  // }

  // return maxLength;

  // Declarative solution:
  return str
    .split(' ')
    .reduce((acc, curr) => Math.max(acc, curr.length), 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
