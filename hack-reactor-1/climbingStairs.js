/*
Name: Climbing Stairs

Link: hhttps://challenge.makerpass.com/c/4e60d87090e1a667f917edfd33c225f4

Description:
You are climbing a stair case. It takes n steps to reach to the top. Your solution will need to be optimized to run in O(n) time complexity.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Examples:
  Input   |   Output
---------------------
  n: 0    |   0
---------------------
  n: 1    |   1
---------------------
  n: 5    |   8
---------------------
  n: 10   |   89
*/

const climbStairs = (n) => {
  let ways = [0, 1, 2];
  for(let i = 3; i <= n; i++) {
    ways[i] = ways[i - 2] + ways[i - 1]; // Fibonacci sequence
  }
  return ways[n];
}
