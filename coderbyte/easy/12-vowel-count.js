// Challenge: Vowel Count
// Difficulty: Easy
// Date Completed: 6/21/16

/*
Have the function VowelCount(str) take the str string parameter being passed
and return the number of vowels the string contains (ie. "All cows eat
grass" would return 5). Do not count y as a vowel for this challenge.
*/

function VowelCount(str) {
  str = str.toLowerCase();
  var vowels = 'aeiou';
  var vowelCount = 0;

  for (var i = 0; i < str.length; i++) {
  	if (vowels.indexOf(str[i]) !== -1) {
  		vowelCount++;
  	}
  }

  return vowelCount;
}

VowelCount(readline());
