// Challenge: Seek and Destroy
// Difficulty: Intermediate

/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of
the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr) {
  let args = [...arguments].slice(1);
  return arr.filter(item => !args.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
