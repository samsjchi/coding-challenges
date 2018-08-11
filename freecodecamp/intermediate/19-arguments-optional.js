// Challenge: Arguments Optional
// Difficulty: Intermediate

/*
Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  let args = [].slice.call(arguments);

  function isNum(num) {
    return typeof num === 'number';
  }

  if (args.length === 1) {
    if (!isNum(args[0])) return undefined;
    return function(num) {
      if (!isNum(num)) return undefined;
      return args[0] + num;
    }
  } else {
    if (!isNum(args[0]) || !isNum(args[1])) return undefined;
    return args[0] + args[1];
  }
}

addTogether(2,3);
