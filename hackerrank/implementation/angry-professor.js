/*
Name: Angry Professor

Problem:
A Discrete Mathematics professor has a class of N students. Frustrated with their lack of discipline,
he decides to cancel class if fewer than K students are present when class starts.

Given the arrival time of each student, determine if the class is canceled.

Input Format:
The first line of input contains T, the number of test cases.

Each test case consists of two lines. The first line has two space-separated integers, N (students in the
class) and K (the cancelation threshold). The second line contains N space-separated integers (a1, a2, ..., aN)
describing the arrival times for each student.

Note: Non-positive arrival times (ai <= 0) indicate the student arrived early or on time; positive arrival
times (ai > 0) indicate the student arrived ai minutes late.

Constraints:
  - 1 <= T <= 10
  - 1 <= N <= 1000
  - 1 <= K <= N
  - -100 <= ai <= 100, where i E [1, N]

Output Format:
For each test case, print the word YES if the class is canceled or NO if it is not.

Note:
If a student arrives exactly on time (ai = 0), the student is considered to have entered before the class started.

Sample Input:
2
4 3
-1 -3 4 2
4 2
0 -1 2 1

Sample Output:
YES
NO

Explanation:
For the first test case, K = 3. The professor wants at least 3 students in attendance, but only 2 have
arrived on time (-3 and -1). Thus, the class is canceled.

For the second test case, K = 2. The professor wants at least 2 students in attendance, and there are 2 who
have arrived on time (0 and -1). Thus, the class is not canceled.
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
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n_temp = readLine().split(' ');
        var threshold = parseInt(n_temp[1]);
        var arrivalTimes = readLine().split(' ').map(Number);
        var count = 0;

        arrivalTimes.forEach(arrivalTime => {
            if(arrivalTime <= 0) count++;
        });

        (count >= threshold) ? console.log('NO') : console.log('YES');
    }
}
