/*
Name: Top Players

Link: https://challenge.makerpass.com/c/58509ddafbcbeb2a9e02358361727ece

Description:
Given an array of players (objects), return the names of all players that have a
score above 100.

DO NOT use .filter() in your solution.

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

Examples:
  Input                                 |  Output
--------------------------------------------------------------------------------
  players:                              |
  [ { "name": "Alice", "score": 88 },   |  ["Bob"]
    { "name": "Bob", "score": 120 } ]   |
*/

const topPlayers = (players) => {
  let names = [];
  for(let i = 0; i < players.length; i++) {
    if(players[i].score > 100) names.push(players[i].name);
  }
  return names;
}
