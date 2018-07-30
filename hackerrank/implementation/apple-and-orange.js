/*
Name: Apple and Orange

Problem:
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below,
the red region denotes his house, where s is the start point and t is the end point. The apple tree is
to the left of his house, and the orange tree is to its right. You can assume the trees are located on a
single point, where the apple tree is at point a and the orange tree is at point b.

When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis.
A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it
falls d units to the tree's right.

Given the value of d for m apples and n oranges, can you determine how many apples and oranges will fall
on Sam's house (i.e., in the inclusive range [s, t])? Print the number of apples that fall on Sam's house
as your first line of output, then print the number of oranges that fall on Sam's house as your second
line of output.

Input Format:
The first line contains two space-separated integers denoting the respective values of s and t.
The second line contains two space-separated integers denoting the respective values of a and b.
The third line contains two space-separated integers denoting the respective values of m and n.
The fourth line contains m space-separated integers denoting the respective distances that each apple falls from point a.
The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.

Constraints:
  - a <= s, t, a, b, m, n <= 10^5
  - -10^5 <= d <= 10^5
  - a < s < t < b

Output Format:
Print two lines of output:
  1. On the first line, print the number of apples that fall on Sam's house.
  2. On the second line, print the number of oranges that fall on Sam's house.

Sample Input:
7 11
5 15
3 2
-2 2 1
5 -6

Sample Output:
1
1

Explanation:
The first apple falls at position 5 - 2 = 3.
The second apple falls at position 5 + 2 = 7.
The third apple falls at position 5 + 1 = 6.
The first orange falls at position 15 + 5 = 20.
The second orange falls at position 15 - 6 = 9.
Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output.
Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output.
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
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);

    var fallenApples = apple.filter((apple) => (a + apple >= s) && (a + apple <= t));
    var fallenOranges = orange.filter((orange) => (b + orange >= s) && (b + orange <= t));
    console.log(fallenApples.length);
    console.log(fallenOranges.length);
}
