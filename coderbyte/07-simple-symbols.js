// Challenge: Simple Symbols
// Difficulty: Easy
// Date Completed: 6/20/16

/*
Have the function SimpleSymbols(str) take the str parameter being passed
and determine if it is an acceptable sequence by either returning the
string true or false. The str parameter will be composed of + and =
symbols with several letters between them (ie. ++d+===+c++==a) and for the
string to be true each letter must be surrounded by a + symbol. So the
string to the left would be false. The string will not be empty and will
have at least one letter.
*/

function SimpleSymbols(str) {
  str = str.toLowerCase();
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var result;

  for (var i = 0; i < str.length; i++) {
    if((letters.indexOf(str[i])) !== -1) {
      if(str[i - 1] === "+" && str[i + 1] === "+") {
        result = true;
      } else {
        result = false;
      }
    }
  }

  return result;
}

SimpleSymbols(readline());
