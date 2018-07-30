/*
Name: Beautiful Days at the Movies

Problem:
Lily likes to play games with integers and their reversals. For some integer x, we define reversed(x) to be
the reversal of all digits in x. For example, reversed(123) = 321, reversed(21) = 12, and reversed(120) = 21.

Logan wants to go to the movies with Lily on some day x satisfying i <= x <= j, but he knows she only goes
to the movies on days she considers to be "beautiful." Lily considers a day to be "beautiful" if the absolute
value of the difference between x and reversed(x) is evenly divisible by k.

Given i, j, and k, count and print the number of "beautiful" days when Logan and Lily can go to the movies.

Input Format:
A single line of three space-separated integers describing the respective values of i, j, and k.

Constraints:
  - 1 <= i <= j <= 2 x 10^6
  - 1 <= k <= 2 x 10^9

Output Format:
Print the number of "beautiful" days in the inclusive range between i and j.

Sample Input:
20 23 6

Sample Output:
2

Explanation:
Logan wants to go to the movies on days 20, 21, 22, and 23. We perform the following calculations to
determine which days are "beautiful":

  - Day 20 is "beautiful" because the following evaluates to a whole number: |20 - 2| / 6 = 3
  - Day 21 is not "beautiful" because the following doesn't evaluate to a whole number: |21 - 12| / 6 = 1.5
  - Day 22 is "beautiful" because the following evaluates to a whole number: |22 - 22| / 6 = 0
  - Day 23 is not "beautiful" because the following doesn't evaluate to a whole number: |23 - 32| / 6 = 1.5

Only two days, 20 and 22, in this interval are "beautiful." Thus, we print 2 as our answer.
*/

function processData(input) {
    let inputData = input.split(' ').map(Number);
    const [ firstDay, lastDay, k ] = inputData;
    let beautifulDayCount = 0;

    for (let day = firstDay; day <= lastDay; day++) {
        if ((Math.abs(day - reversed(day))) % k === 0) beautifulDayCount++;
    }

    console.log(beautifulDayCount);
}

function reversed(x) {
    return parseInt(x.toString().split('').reverse().join(''));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
