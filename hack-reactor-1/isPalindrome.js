/*
Name: Is Palindrome

Link: https://challenge.makerpass.com/c/8dcd6536e419191a1911476c57e35342

Description:
Given a string, return true if it’s a palindrome, and false otherwise.
Only consider alphabet characters as part of the word.

Examples:
   Input             |   Output
-------------------------------------------
   str: "kayak"      |   true
   str: "race car"   |   true
   str: "Civic"      |   true
   str: "Honda"      |   false
*/

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\s+/g, '');
  var reversedStr = str.toLowerCase().split('').reverse().join('');
  return str === reversedStr;
}
