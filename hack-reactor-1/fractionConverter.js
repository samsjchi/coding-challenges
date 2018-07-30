/*
Name: Fraction Converter

Link: https://challenge.makerpass.com/c/2b3014f0cd584bf6c58d2cc29e72da8f

Description:
Write a function that takes a number as its argument and returns a string that
represents that number’s simplified fraction.

Whole numbers and mixed fractions should be returned as improper fractions.

Examples:
  Input          |  Output
-----------------------------------
  number: 0.5    |  "1/2"
  number: 3      |  "3/1"
  number: 2.5    |  "5/2"
  number: 2.75   |  "11/4"
*/

const fractionConverter = (number) => {
  let numerator = 1.0;
  let denominator = 1.0;
  let isNegative = number < 0.0;

  if (isNegative) number = number * -1;
  if (number === 0.0) return '0/1';

  while (numerator/denominator !== number) {
    if (numerator/denominator < number) {
      numerator++;
      denominator--;
    } else if (numerator/denominator > number) {
      denominator++;
    }
  }

  if (isNegative) return '-'+ numerator + '/' + denominator;
  return numerator + '/' + denominator;
}
