// Challenge: Division Stringified
// Difficulty: Easy
// Date Completed: 7/22/16

/*
Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters 
being passed, divide num1 by num2, and return the result as a string with properly formatted commas. 
If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). 
For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346". 
*/

function DivisionStringified(num1,num2)) {
  var div = Math.round(num1/num2);
  div = div.toString().split('');
  var insert = 0;
 
  if (div.length > 3) {
    for (var i = div.length - 1; i >= 0; i--) {
      insert++;
      if (insert === 3) { 
        div[i] = ',' + div[i];
        insert = 0;
      }
    }
  }
    
  return div.join('');
}

DivisionStringified(readline());
