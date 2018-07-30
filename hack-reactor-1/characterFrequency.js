/*
Name: Character Frequency

Link: https://challenge.makerpass.com/c/619b43dbf94ddfcea714d2b28c8b6c93

Description:
Write a function that takes as its input a string and returns an array of arrays
as shown below sorted in descending order by frequency and then by ascending order
by character.

Examples:
   Input                   |  Output
---------------------------------------------------------------------------
   string: "aaabbc"        |  [ ["a", 3], ["b", 2], ["c", 1] ]
   string: "mississippi"   |  [ ["i", 4], ["s", 4], ["p", 2], ["m", 1] ]
   string: ""              |  []
*/

const characterFrequency = (string) => {
  let results = [];
  let charCounts = {};

  string.split('').forEach((char) => {
    char = char.toString();
    charCounts[char] ? charCounts[char]++ : charCounts[char] = 1;
  });

  for(char in charCounts) {
    results.push([char, charCounts[char]]);
  }

  return results.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    if (a[0] > b[0]) return 1;
    else return -1;
  });
}
