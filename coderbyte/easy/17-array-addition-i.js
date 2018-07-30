// Challenge: Array Addition I
// Difficulty: Easy
// Date Completed: 6/28/16

/*
Using the JavaScript language, have the function ArrayAdditionI(arr)
take the array of numbers stored in arr and return the string true if
any combination of numbers in the array can be added up to equal the
largest number in the array, otherwise return the string false. For
example: if arr contains [4, 6, 23, 10, 1, 3] the output should return
true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will
not contain all the same elements, and may contain negative numbers.
*/

function ArrayAdditionI(arr) {
  var max = Math.max.apply(Math.max, arr);
  arr.splice(arr.indexOf(max), 1);
  var others = arr;
  var possibilities = Math.pow(2, others.length);

  for (var i = 1; i < possibilities; i++) {
    var sum = 0;
    for (var j = 0; j < others.length; j++) {
      if (Math.pow(2, j) & i) {
        sum += others[j];
      }
      if (sum == max) {
        return 'true';
      }
    }
  }
  return 'false';

}

ArrayAdditionI(readline());
