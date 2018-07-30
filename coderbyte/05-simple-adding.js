// Challenge: Simple Adding
// Difficulty: Easy
// Date Completed: 6/18/16

/*
Have the function SimpleAdding(num) add up all the numbers from 1 to num.
For the test cases, the parameter num will be any number from 1 to 1000.
*/

function SimpleAdding(num) {
  var sum = 0;

  for (var i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

SimpleAdding(readline());
