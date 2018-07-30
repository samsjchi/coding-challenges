// Challenge: AB Check
// Difficulty: Easy
// Date Completed: 6/21/16

/*
Have the function ABCheck(str) take the str parameter being passed and
return the string true if the characters a and b are separated by exactly 3
places anywhere in the string at least once (ie. "lane borrowed" would
result in true because there is exactly three characters between a and b).
Otherwise return the string false.
*/

function ABCheck(str) {
  str = str.toLowerCase();
  var check = false;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' && str[i + 4] === 'b') {
      check = true;
    } else if (str[i] === 'b' && str[i + 4] === 'a') {
      check = true;
    }
  }

  return check;
}

ABCheck(readline());
