// Challenge: Second GreatLow
// Difficulty: Easy
// Date Completed: 7/20/16

/*
Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored 
in arr and return the second lowest and second greatest numbers, respectively, separated by a space.
For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be 
empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 
*/

function SecondGreatLow(arr) {
  var unique = arr.filter(function(elem, index, self) {
    return self.indexOf(elem) === index;
  });

  var sorted = unique.sort(function(a, b) {
    return a - b;
  });

  if (sorted.length < 2) { 
    return sorted[0] + " " + sorted[0]; 
  } else {
    return sorted[1] + " " + sorted[sorted.length - 2];
  }
}

SecondGreatLow(readline());
