// Challenge: Letter Count I
// Difficulty: Easy
// Date Completed: 7/18/16

/*
Using the JavaScript language, have the function LetterCountI(str) take the str 
parameter being passed and return the first word with the greatest number of 
repeated letters. For example: "Today, is the greatest day ever!" should return 
greatest because it has 2 e's (and 2 t's) and it comes before ever which also 
has 2 e's. If there are no words with repeating letters return -1. Words will 
be separated by spaces. 
*/

function LetterCountI(str) {
  var arr = str.toLowerCase().split(' ');
  var n = arr.length;
  var counter = 1;
  var maxCount = 0;
  var newArr = [];
  
  for (var i = 0; i < n; i++) {
    wordArr = arr[i].split('');
    wordArr.sort();
    
    for (var j = 0; j < wordArr.length; j++) {
      if (wordArr[j] === wordArr[j + 1]) {
        counter++;
      } else {
        if (counter > maxCount) {
          maxCount = counter;
          counter = 1;
        }
      }
    }
  
    newArr.push([arr[i], maxCount]);
    maxCount = 0;
  }

  newArr.sort(function(a, b) {
    return b[1] - a[1];
  });
                              
  if (newArr[0][1] == 1) {
    return -1;
  } else {
    return newArr[0][0]; 
  }
}

LetterCountI(readline());
