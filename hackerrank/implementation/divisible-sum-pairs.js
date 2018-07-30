/*
Name: Divisible Sum Pairs

Problem:
You are given an array of n integers, a0, a1, ..., an-1, and a positive integer, k. Find and print the
number of (i, j) pairs where i < j and ai + aj is evenly divisible by k.

Input Format:
The first line contains 2 space-separated integers, n and k, respectively.
The second line contains n space-separated integers describing the respective values of a0, a1, ..., an-1.

Constraints:
  - 2 <= n <= 100
  - 1 <= k <= 100
  - 1 <= ai <= 100

Output Format:
Print the number of (i, j) pairs where i < j and ai + aj is evenly divisible by k.

Sample Input:
6 3
1 3 2 6 1 2

Sample Output:
5

Explanation:
Here are the 5 valid pairs:
  - (0, 2) -> a0 + a2 = 1 + 2 = 3
  - (0, 5) -> a0 + a5 = 1 + 2 = 3
  - (1, 3) -> a1 + a3 = 3 + 6 = 9
  - (2, 4) -> a2 + a4 = 2 + 1 = 3
  - (4, 5) -> a4 + a5 = 1 + 2 = 3
*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    let count = 0;
    for(let i = 0; i < a.length - 1; i++) {
        for(let j = i + 1; j < a.length; j++) {
            if((a[i] + a[j]) % k === 0) {
                count++;
            }
        }
    }
    console.log(count);
}
