// Challenge: Counting Minutes I
// Difficulty: Easy
// Date Completed: 7/24/16

/*
Using the JavaScript language, have the function CountingMinutesI(str) take the 
str parameter being passed which will be two times (each properly formatted with 
a colon and am or pm) separated by a hyphen and return the total number of minutes 
between the two times. The time will be in a 12 hour clock format. For example: 
if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am 
the output should be 1320. 
*/

function getDayMinutes(str) { 
  var min = 0;
  var t = Number(str.split(':')[0]);
  
  min += t * 60;
  t = Number(str.substr(str.length - 4, 2));
  min += t;
  
  if (str.substr(str.length - 2) === 'pm') {
    min += 12 * 60;
  }

  return min;
}

function CountingMinutesI(str) { 
  var times = str.split('-')
  var diff = getDayMinutes(times[1]) - getDayMinutes(times[0]);
  
  if (diff < 0)
    diff += 24 * 60;
 
  return diff; 
}

CountingMinutesI(readline());
