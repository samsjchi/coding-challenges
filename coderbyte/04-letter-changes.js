// Challenge: Letter Changes
// Difficulty: Easy
// Date Completed: 6/17/16

/*
Have the function LetterChanges(str) take the str parameter being passed
and modify it using the following algorithm. Replace every letter in the
string with the letter following it in the alphabet (ie. c becomes d, z
becomes a). Then capitalize every vowel in this new string (a, e, i, o, u)
and finally return this modified string.
*/

function LetterChanges(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var vowels = 'aeiou';
  var newStr = '';
  var capStr = '';

  for (var i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) !== -1) {
      var index = alphabet.indexOf(str[i]);
      newStr += alphabet.charAt(index + 1);
    } else {
      newStr += str[i];
    }
  }

  for (var i = 0; i < newStr.length; i++) {
    if (vowels.indexOf(newStr[i]) !== -1) {
      capStr += newStr[i].toUpperCase();
    } else {
      capStr += newStr[i];
    }
  }

  return capStr;
}

LetterChanges(readline());
