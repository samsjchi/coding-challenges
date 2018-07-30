/*
Name: Staircase

Problem:
Consider a staircase of size n = 4:

     #
    ##
   ###
  ####

Observe that its base and height are both equal to n, and the image is drawn using # symbols
and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

Input Format:
A single integer, n, denoting the size of the staircase.

Output Format:
Print a staircase of size n using # symbols and spaces.

Note: The last line must have 0 spaces in it.

Sample Input:
6

Sample Output:
     #
    ##
   ###
  ####
 #####
######

Explanation:
The staircase is right-aligned, composed of # symbols and spaces, and has a height and
width of n = 6.
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
    var space = ' ';
    var spaces = '';
    var stair = '#';
    var staircase = '';

    for(var i = 1; i <= n - 1; i++) {
        spaces += space;
    }
    for(var j = 1; j <= n; j++) {
        staircase += spaces + stair + '\n';
        spaces = spaces.slice(1);
        stair += '#';
    }
    console.log(staircase);
}
