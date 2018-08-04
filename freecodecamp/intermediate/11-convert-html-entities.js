// Challenge: Convert HTML Entities
// Difficulty: Intermediate

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to
their corresponding HTML entities.
*/

function convertHTML(str) {
  // Naive solution:
  // let strArr = str.split('');
  // let htmlEntityMap = {
  //   '&': '&amp;',
  //   '<': '&lt;',
  //   '>': '&gt;',
  //   '"': '&quot;',
  //   "'": '&apos;'
  // }

  // strArr.forEach((char, index) => {
  //   if (htmlEntityMap.hasOwnProperty(char)) {
  //     strArr[index] = htmlEntityMap[char];
  //   }
  // });

  // return strArr.join('');

  // Declarative solution:
  let htmlEntityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }

  return str
    .split('')
    .map(char => htmlEntityMap[char] || char)
    .join('');
}

convertHTML("Dolce & Gabbana");
