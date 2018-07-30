/*
Name: Solve Me First

Description:
Welcome to HackerRank! The purpose of this challenge is to familiarize you with
reading input from stdin (the standard input stream) and writing output to stdout
(the standard output stream) using our environment.

Review the code provided in the editor below, then complete the solveMeFirst function
so that it returns the sum of two integers read from stdin. Take some time to understand
this code so you're prepared to write it yourself in future challenges.

Select a language below, and start coding!

Input Format:
Code that reads input from stdin is provided for you in the editor. There are  lines of input,
and each line contains a single integer.

Output Format:
Code that prints the sum calculated and returned by solveMeFirst is provided for you in the editor.
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

function solveMeFirst(a, b) {
    return a + b;
}

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = solveMeFirst(a, b);
    console.log(res);
}
