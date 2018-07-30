/*
Name: Product of All Other Numbers

Problem:
You have an array of integers, and for each index you want to find the product of every integer except
the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array
of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division in your solution.
*/

// Brute Force Solution:
function getProductsOfAllIntsExceptAtIndex(array) {
  let arrCopy = array.slice();
  let products = [];

  arrCopy.forEach((int, i) => {
    let intAtCurrentIndex = int; // Store current integer in temp variable
    arrCopy.splice(i, 1); // Remove current integer

    // Calculate product of all remaining integers
    let currentProduct = arrCopy.reduce((product, num) => product * num);
    products.push(currentProduct);

    arrCopy.splice(i, 0, intAtCurrentIndex); // Add back current integer at current index
  });

  return products;
}

// Greedy Solution:
function getProductsOfAllIntsExceptAtIndex(array) {
  let productsOfAllIntsExceptAtIndex = [];

  // Calculate product of all integers before each index and store in array
  let runningProductBeforeIndex = 1;
  for(let i = 0; i < array.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = runningProductBeforeIndex;
    runningProductBeforeIndex *= array[i];
  }

  // Calculate product of all integers after each index and multiply by the stored product of
  // integers before each index from above
  let runningProductAfterIndex = 1;
  for(let j = array.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= runningProductAfterIndex;
    runningProductAfterIndex *= array[j];
  }

  return productsOfAllIntsExceptAtIndex;
}
