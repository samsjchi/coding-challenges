/*
Name: Concat Strings

Link: https://challenge.makerpass.com/c/0fb4ab3e177588626282b412ea3240f8

Description:
Given an array of strings, return all strings concatenated together.

DO NOT use strings.reduce() nor strings.join('')

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

Examples:
  Input                      |  Output
-----------------------------------------------------------
  numbers: ["a", "b", "c"]   |  "abc"
  numbers: []                |  ""
*/

const concatStrings = (strings) => {
  let str = '';
  strings.forEach(char => str += char);
  return str;
}
