/*
Name: Character Sum

Link: https://challenge.makerpass.com/c/d91ea7da5fa73eea1c8468cb7b33d2e8

Description:
Given a string of arbitrary size, convert each character into its integer
equivalent and sum the entirety.

Examples:
  Input               |  Output
---------------------------------------------
  str: "123"          |  6
  str: "0101"         |  2
  str: "so cool!!1!"  |  1
*/

const charSum = (str) => {
  return str
            .split('')
            .filter(char => +char)
            .reduce((sum, num) => sum + +num, 0);
}
