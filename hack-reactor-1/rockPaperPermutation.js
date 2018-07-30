/*
Name: Rock Paper Permutation

Link: https://challenge.makerpass.com/c/60fe81a4adfa05cdedfde520a6bcb1d9

Description:
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

Examples:
  Input            |   Output
---------------------------------------------
  roundCount: 1    |   [ "r", "p", "s" ]
---------------------------------------------
  roundCount: 2    |   [ "rr", "rp", "rs",
                         "pr", "pp", "ps",
                         "sr", "sp", "ss" ]
---------------------------------------------
  roundCount: 0    |   []
*/

const rockPaperPermutation = (roundCount) => {
  let rps = ['r','p','s'];
  let results = [];

  if (!roundCount) return results;

  let recurse = (builtString) => {
    if (builtString.length === roundCount) {
      return results.push(builtString);
    }
    rps.forEach(char => recurse(builtString + char));
  };

  recurse('');
  return results;
};
