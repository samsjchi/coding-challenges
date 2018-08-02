// Challenge: Spinal Tap Case
// Difficulty: Intermediate

/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');
