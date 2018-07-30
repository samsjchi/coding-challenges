/*
Name: Balanced Brackets

Link: https://challenge.makerpass.com/c/2b7ef4cf4f23dcf9585d075a4844826d

Description:
Given a string, return true if it contains all balanced parenthesis (), curly-brackets {},
and square-brackets [].

Examples:
  Input                         |  Output
-----------------------------------------------------------------
  str: "(x + y) - (4)"          |  true
  str: "(((10 ) ()) ((?)(:)))"  |  true
  str: "[{()}]"                 |  true
  str: "(50)("                  |  false
  str: "[{]}"                   |  false
*/

const isBalanced = (str) => {
  let openBrackets = [];
  let bracketMatcher = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
  };
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
      openBrackets.push(str[i]);
    } else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
      if(str[i] !== bracketMatcher[openBrackets.pop()]) {
        return false;
      }
    }
  }
  if(openBrackets.length > 0) {
    return false;
  }
  return true;
}
