// Challenge: Pig Latin
// Difficulty: Intermediate

/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to
the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.split('');
  let suffix = '';

  if (vowels.includes(str.charAt(0))) {
    return str + 'way';
  } else if (str.match(/[aeiou]/gi) === null) {
    return str + 'ay';
  }

  while (!vowels.includes(strArr[0])) {
    suffix += strArr.shift();
  }

  return strArr.join('') + suffix + 'ay';
}

translatePigLatin("consonant");
