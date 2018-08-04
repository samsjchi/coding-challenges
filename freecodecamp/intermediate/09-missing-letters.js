// Challenge: Missing Letters
// Difficulty: Intermediate

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  let alphabetLetters = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetArr = alphabetLetters.split('');
  let strArr = str.split('');
  let missingLetter;

  for (let i = 0; i < strArr.length; i++) {
    if (alphabetArr.indexOf(strArr[i + 1]) - alphabetArr.indexOf(strArr[i]) > 1) {
      missingLetter = alphabetArr[alphabetArr.indexOf(strArr[i]) + 1];
    }
  }

  return missingLetter;
}

fearNotLetter("abce");
