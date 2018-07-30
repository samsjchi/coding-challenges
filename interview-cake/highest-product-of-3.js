/*
Name: Highest Product of 3

Problem:
Given an arrayOfInts, find the highestProduct you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/

// Brute Force Solution:
function highestProduct(arrayOfInts) {
  const [ first, second, third ] = arrayOfInts;
  let highestProductOf3 = first * second * third;

  for(let i = 0; i < arrayOfInts.length; i++) {
    for(let j = i + 1; j < arrayOfInts.length; j++) {
      for(let k = j + 1; k < arrayOfInts.length; k++) {
        highestProductOf3 = Math.max(
          highestProductOf3,
          arrayOfInts[i] * arrayOfInts[j] * arrayOfInts[k]
        );
      }
    }
  }

  return highestProductOf3;
}

// Greedy Solution:
function highestProduct(arrayOfInts) {
  if(arrayOfInts.length < 3) throw new Error('The array contains less than 3 items!');

  const [ first, second, third ] = arrayOfInts;
  let highestInt = Math.max(first, second);
  let lowestInt = Math.min(first, second);
  let highestProductOf2 = first * second;
  let lowestProductOf2 = first * second;
  let highestProductOf3 = first * second * third;

  for(let i = 2; i < arrayOfInts.length; i++) {
    let currentInt = arrayOfInts[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      highestProductOf2 * currentInt,
      lowestProductOf2 * currentInt
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      highestInt * currentInt,
      lowestInt * currentInt
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      highestInt * currentInt,
      lowestInt * currentInt
    );

    highestInt = Math.max(highestInt, currentInt);
    lowestInt = Math.min(lowestInt, currentInt);
  }

  return highestProductOf3;
}
