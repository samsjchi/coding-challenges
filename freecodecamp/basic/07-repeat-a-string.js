// Challenge: Repeat a String Repeat a String
// Difficulty: Basic

/*
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // Naive solution:
  // let repeatedStr = '';
  // for (let i = 1; i <= num; i++) {
  //   repeatedStr += str;
  // }
  // return repeatedStr;

  // Recursive solution:
  if (num < 0) { return ''; }
  if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes("abc", 3);
