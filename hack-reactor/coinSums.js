/*
Name: Coin Sums

Link: https://challenge.makerpass.com/c/7174ea4bdfdfdf835b54bedebc6d5803

Description:
In England the currency is made up of pound, £, and pence, p, and there are eight coins
in general circulation:

  1p
  2p
  5p
  10p
  20p
  50p
  £1 (100p)
  £2 (200p)

Given a given number of pence, return the possible number of ways someone could make change.

It is possible to make 5 pence in the following ways:

  5 * 1p

  3 * 1p + 1 * 2p

  1 * 1p + 2 * 2p

  1 * 5p

In other words, find all the possible combinations of coins that sum to a given pence value.

Parameters:
total (required) - the number of pence

Examples:
  Input        |  Output
-------------------------------
  total: 1     |  1
  total: 17    |  28
*/

const coinSums = (total) => {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  let count = 0;
  let recurse = (total, idx) => {
    coins.forEach((coin, index) => {
      if(total - coin > 0 && index >= idx) {
        recurse(total - coin, index);
      }
      if(total - coin === 0 && index >= idx) {
        count++;
      }
    });
  };
  recurse(total, 0);
  return count;
}
