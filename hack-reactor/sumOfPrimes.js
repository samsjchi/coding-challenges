/*
Name: Sum of Primes

Link: https://challenge.makerpass.com/c/af62506e353cda66297742652d6f6500

Description:
Given a positive number, return the sum of all positive primes that are
less than or equal to that number.

Examples:
  Input   |  Output
---------------------
   n: 4   |   5
   n: 5   |   10
   n: 6   |   10
*/

const sumOfPrimes = (n) => {
  let primes = [];
  for(let i = 0; i <= n; i++) {
    isPrime(i) && primes.push(i);
  }
  return primes.reduce((a, b) => { return a + b; }, 0);
}

const isPrime = (num) => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
