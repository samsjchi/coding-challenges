/*
Name: Sherlock and Squares

Problem:
Watson gives two integers (A and B) to Sherlock and asks if he can count the number of square integers
between A and B (both inclusive).

Note: A square integer is an integer which is the square of any integer. For example, 1, 4, 9, and 16 are
some of the square integers as they are squares of 1, 2, 3, and 4, respectively.

Input Format:
The first line contains T, the number of test cases. T test cases follow, each in a new line.
Each test case contains two space-separated integers denoting A and B.

Constraints:
  - 1 <= T <= 100
  - 1 <= A <= B <= 10^9

Output Format:
For each test case, print the required answer in a new line.

Sample Input:
2
3 9
17 24

Sample Output:
2
0

Explanation:
Test Case #00: In range [3, 9], 4 and 9 are the two square numbers.
Test Case #01: In range [17, 24], there are no square numbers.
*/

const processData = (input) => {
    const testCases = input.split('\n').slice(1);
    for (let i = 0; i < testCases.length; i++) {
        let range = testCases[i].split(' ');
        let [ lower, upper ] = range;
        let squareNums = parseInt(Math.floor(Math.sqrt(upper)) - (Math.ceil(Math.sqrt(lower))) + 1);
        console.log(squareNums);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", (input) => _input += input);
process.stdin.on("end", () => processData(_input));
