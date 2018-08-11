// Challenge: Steamroller
// Difficulty: Intermediate

/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten), []);
}

steamrollArray([1, [2], [3, [[4]]]]);
