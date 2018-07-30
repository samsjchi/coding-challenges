/*
Name: Apple Stocks

Problem:
Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will.

Suppose we could access yesterday's stock prices as an array, where:
  - The values are the price in dollars of Apple stock.
  - A higher index indicates a later time.

So if the stock cost $500 at 10:30am and $550 at 11:00am, then:

stockPricesYesterday[60] = 500;

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made
from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:
---
  var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

  getMaxProfit(stockPricesYesterday);
  // returns 6 (buying for $5 and selling for $11)
---

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least
1 minute must pass).
*/

// Brute Force Solution:
function getMaxProfit(stockPrices) {
  let maxProfit = stockPrices[1] - stockPrices[0];

  for(let i = 0; i < stockPrices.length; i++) {
    for(let j = i + 1; j < stockPrices.length; j++) {
      maxProfit = Math.max(maxProfit, stockPrices[j] - stockPrices[i]);
    }
  }

  return maxProfit;
}

// Greedy Solution:
function getMaxProfit(stockPrices) {
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for(let i = 1; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}
