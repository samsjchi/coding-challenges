// Challenge: Longest Word
// Difficulty: Easy
// Date Completed: 6/16/16

/*
Using the JavaScript language, have the function LongestWord(sen) take the
sen parameter being passed and return the largest word in the string. If
there are two or more words that are the same length, return the first word
from the string with that length. Ignore punctuation and assume sen will not
be empty.
*/

function LongestWord(sen) {
  sen = sen.replace(/[^a-zA-Z0-9\s]/g, "");
  var senSplit = sen.split(" ");
  var longestWord = "";

  for (var i = 0; i < senSplit.length; i++) {
      var word = senSplit[i];
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }

  return longestWord;
}

LongestWord(readline());
