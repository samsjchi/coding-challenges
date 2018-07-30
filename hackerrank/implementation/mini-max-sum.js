/*
Name: Mini-Max Sum

Problem:
Given five positive integers, find the minimum and maximum values that can be calculated by
summing exactly four of the five integers. Then print the respective minimum and maximum values
as a single line of two space-separated long integers.

Input Format:
A single line of five space-separated integers.

Constraints:
- Each integer is in the inclusive range [1, 10^9].

Output Format:
Print two space-separated long integers denoting the respective minimum and maximum values
that can be calculated by summing exactly four of the five integers. (The output can be greater
than 32 bit integer.)

Sample Input:
1 2 3 4 5

Sample Output:
10 14

Explanation:
Our initial numbers are 1, 2, 3, 4, and 5. We can calculate the following sums using four of
the five integers:
  1. If we sum everything except 1, our sum is 2 + 3 + 4 + 5 = 14.
  2. If we sum everything except 2, our sum is 1 + 3 + 4 + 5 = 13.
  3. If we sum everything except 3, our sum is 1 + 2 + 4 + 5 = 12.
  4. If we sum everything except 4, our sum is 1 + 2 + 3 + 5 = 11.
  5. If we sum everything except 5, our sum is 1 + 2 + 3 + 4 = 10.

As you can see, the minimal sum is 1 + 2 + 3 + 4 = 10 and the maximal sum is 2 + 3 + 4 + 5 = 14.
Thus, we print these minimal and maximal sums as two space-separated integers on a new line.

Hints: Beware of integer overflow! Use 64-bit Integer.
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
    var a0_temp = readLine().split(' ');
    var b0_temp = readLine().split(' ');
    var aliceScore = 0;
    var bobScore = 0;

    for(var i = 0; i < a0_temp.length; i++) {
        if(parseInt(a0_temp[i]) > parseInt(b0_temp[i])) {
            aliceScore++;
        } else if(parseInt(a0_temp[i]) < parseInt(b0_temp[i])) {
            bobScore++;
        }
    }

    console.log(aliceScore + ' ' + bobScore);
}
