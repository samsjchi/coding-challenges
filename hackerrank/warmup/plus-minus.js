/*
Name: Plus Minus

Problem:
Given an array of integers, calculate which fraction of its elements are positive, which fraction
of its elements are negative, and which fraction of its elements are zeroes, respectively. Print
the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal
places, though answers with absolute error of up to 10^-4 are acceptable.

Input Format:
The first line contains an integer, N, denoting the size of the array.
The second line contains N space-separated integers describing an array of numbers (a0, a1, a2, ..., an-1).

Output Format:
You must print the following 3 lines:
  1. A decimal representing of the fraction of positive numbers in the array.
  2. A decimal representing of the fraction of negative numbers in the array.
  3. A decimal representing of the fraction of zeroes in the array.

Sample Input:
6
-4 3 -9 0 4 1

Sample Output:
0.500000
0.333333
0.166667

Explanation:
There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
The respective fractions of positive numbers, negative numbers and zeroes are 3/6 = 0.500000,
2/6 = 0.333333 and 1/6 = 0.166667, respectively.
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
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var posCount = 0;
    var negCount = 0;
    var zeroCount = 0;
    var posFrac, negFrac, zeroFrac;

    arr.forEach((num) => {
        if(num > 0) posCount++;
        if(num < 0) negCount++;
        if(num === 0) zeroCount++;
    });

    posFrac = (posCount / n).toFixed(6);
    negFrac = (negCount / n).toFixed(6);
    zeroFrac = (zeroCount / n).toFixed(6);

    var result = posFrac + '\n' + negFrac + '\n' + zeroFrac;
    console.log(result);
}
