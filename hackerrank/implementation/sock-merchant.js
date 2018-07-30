/*
Name: Sock Merchant

Problem:
John's clothing store has a pile of n loose socks where each sock i is labeled with an integer, ci,
denoting its color. He wants to sell as many socks as possible, but his customers will only buy them
in matching pairs. Two socks, i and j, are a single matching pair if ci = cj.

Given n and the color of each sock, how many pairs of socks can John sell?

Input Format:
The first line contains an integer, n, denoting the number of socks.
The second line contains n space-separated integers describing the respective values of c0, c1, c2, ..., cn-1.

Constraints:
  - 1 <= n <= 100
  - 1 <= ci <= 100

Output Format:
Print the total number of matching pairs of socks that John can sell.

Sample Input:
9
10 20 20 10 10 30 50 10 20

Sample Output:
3
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
    const n = parseInt(readLine());
    let socks = readLine().split(' ').map(Number);
    let counts = {};
    let matchingPairCount = 0;

    socks.forEach(sock => counts[sock] = 0);
    socks.forEach(sock => counts[sock]++);

    for (let sock in counts) {
        matchingPairCount += Math.floor(counts[sock] / 2);
    }

    console.log(matchingPairCount);
}
