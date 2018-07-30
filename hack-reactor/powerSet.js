/*
Name: Power Set

Link: https://challenge.makerpass.com/c/b91ba11941a214e41b2da9a07b57c233

Description:
Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:
1. All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
3. Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.

Examples:
  Input              |    Output
---------------------------------------------------------------------------------
  string: "a"        |    ["", "a"]
---------------------------------------------------------------------------------
  string: "ab"       |    ["", "a", "ab", "b"]
---------------------------------------------------------------------------------
  string: "horse"    |    ["", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr",
                     |     "ehrs", "ehs",   "eo", "eor", "eors", "eos", "er",
                     |     "ers", "es", "h", "ho", "hor", "hors", "hos", "hr",
                     |     "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s"]
*/

const powerSet = (str) => {
  let results = [''];
  let sortedUniqs = str.split('')
                       .sort()
                       .filter((letter, i, letters) => {
                         return i === letters.indexOf(letter);
                       });
  let recurse = (built, chars) => {
    for(let i = 0; i < chars.length; i++) {
      results.push(built + chars[i]);
      recurse(built + chars[i], chars.slice(i + 1));
    }
  };
  recurse('', sortedUniqs);
  return results;
}
