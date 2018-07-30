/*
Name: Only Unique

Link: https://challenge.makerpass.com/c/22c2120890322095c02498a4bf6b9f61

Description:
Given a string, remove any characters that are not unique from the string.

Examples:
   Input                |   Output
--------------------------------------------------
   str: "abccdefe"      |   "abdf"
   str: "hello there"   |   "o tr"
   str: "xyz"           |   "xyz"
   str: "iiii"          |   ""
*/

const onlyUnique = (str) => {
  let uniqStr = '';
  const charCount = {};

  for(let i = 0; i < str.length; i++) {
    let char = str[i].toString();
    charCount[char] = charCount[char] + 1 || 1;
  }

  for(char in charCount) {
    if(charCount[char] === 1) {
      uniqStr += char;
    }
  }

  return uniqStr;
}
