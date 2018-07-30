/*
Name: Circular Array Rotation

Problem:
John Watson performs an operation called a right circular rotation on an array of integers,
[a0, a1, ..., an-1]. After performing one right circular rotation operation, the array is
transformed from [a0, a1, ..., an-1] to [an-1, a0, ..., an-2].

Watson performs this operation k times. To test Sherlock's ability to identify the current
element at a particular position in the rotated array, Watson asks q queries, where each query
consists of a single integer, m, for which you must print the element at index m in the rotated
array (i.e., the value of am).

Input Format:
The first line contains 3 space-separated integers, n, k, and q, respectively.
The second line contains n space-separated integers, where each integer i describes array
element ai (where 0 <= i < n).
Each of the q subsequent lines contains a single integer denoting m.

Constraints:
  - 1 <= n <= 10^5
  - 1 <= ai <= 10^5
  - 1 <= k <= 10^5
  - 1 <= q <= 500
  - 1 <= m <= n - 1

Output Format:
For each query, print the value of the element at index m of the rotated array on a new line.

Sample Input:
3 2 3
1 2 3
0
1
2

Sample Output:
2
3
1

Explanation:
After the first rotation, the array becomes [3, 1, 2].
After the second (and final) rotation, the array becomes [2, 3, 1].

Let's refer to the array's final state as array b. For each query, we just have to print the
value of bm on a new line:
  1. m = 0, so we print 2 on a new line.
  2. m = 1, so we print 3 on a new line.
  3. m = 2, so we print 1 on a new line.
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
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);

    var result = '';
    for(var i = 0; i < k; i++) {
        a.unshift(a.pop());
    }
    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine());
        result += a[m] + '\n';
    }
    console.log(result);
}
