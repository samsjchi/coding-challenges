// Challenge: Word Count
// Difficulty: Easy
// Date Completed: 6/21/16

/*
Have the function WordCount(str) take the str string parameter being passed
and return the number of words the string contains (ie. "Never eat shredded
wheat" would return 4). Words will be separated by single spaces.
*/

function WordCount(str) {
  return str.split(' ').length;
}

WordCount(readline());
