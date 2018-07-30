/*
Name: Paths to Work

Link: https://challenge.makerpass.com/c/10502be3f609caa16fcab07f2cec8ac9

Description:
You live at (0,0) coordinate on a map, and your work is located at e units east and
s units south from where you live. Assuming that you can only travel east and south,
return the number of possible unique paths to take to work.

Try utilizing some kind of lookup table or memoization to optimize the time complexity.

Examples:
  Input        |   Output
-------------------------------
  e: 1, s: 0   |   1
-------------------------------
  e: 0, s: 1   |   1
-------------------------------
  e: 2, s: 2   |   6
-------------------------------
  e: 4, s: 4   |   70
*/

const pathsToWork = (e, n) => {
  let map = [];
  for (let i = 0; i <= n; i++) {
    let row = [1];
    for (let k = 1; k <= e; k++) {
      map[i-1] ? row.push(row[k-1] + map[i-1][k]) : row.push(row[k-1]);
    }
    map.push(row);
  }
  return map[n][e];
}
