/*
Name: Library Fine

Problem:
Your local library needs your help! Given the expected and actual return dates for a library book, create
a program that calculates the fine (if any). The fee structure is as follows:

  1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
  2. If the book is returned after the expected return day but still within the same calendar month and year
     as the expected return date, fine = 15 Hackos x (the number of days late).
  3. If the book is returned after the expected return "month" but still within the same calendar year as the
     expected return date, the fine = 500 Hackos x (the number of months late).
  4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos.

Input Format:
The first line contains 3 space-separated integers denoting the respective day, month, and year on which the
book was actually returned.
The second line contains 3 space-separated integers denoting the respective day, month, and year on which the
book was expected to be returned (due date).

Constraints:
  - 1 <= D <= 31
  - 1 <= M <= 12
  - 1 <= Y <= 3000
  - It is guaranteed that the dates will be valid Gregorian calendar dates.

Output Format:
Print a single integer denoting the library fine for the book received as input.

Sample Input:
9 6 2015
6 6 2015

Sample Output:
45

Explanation:
Given the following return dates:
Actual: Da = 9, Ma = 6, Ya = 2015
Expected: De = 6, Me = 6, Ye = 2015

Because Ye = Ya, we know it is less than a year late.
Because Me = Ma, we know it's less than a month late.
Because De < Da, we know that it was returned late (but still within the same month and year).

Per the library's fee structure, we know that our fine will be 15 Hackos x (# days late). We then print
the result of 15 x (Da - De) = 15 x (9 - 6) = 45 as our output.
*/

const processData = (input) => {
    const lines = input.split('\n');
    const actualDate = lines[0].split(' ');
    const expectedDate = lines[1].split(' ');

    const yearDiff = parseInt(actualDate[2]) - parseInt(expectedDate[2]);
    const monthDiff = parseInt(actualDate[1]) - parseInt(expectedDate[1]);
    const dayDiff = parseInt(actualDate[0]) - parseInt(expectedDate[0]);

    console.log(fee(yearDiff, monthDiff, dayDiff));
}

const fee = (year, month, day) => {
    if(year > 0) return 10000;
    if(year === 0 && month > 0) return month * 500;
    if(year === 0 && month === 0 && day > 0) return day * 15;
    return 0;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", (input) => _input += input);
process.stdin.on("end", () => processData(_input));
