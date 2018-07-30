/*
Name: Merging Meeting Times

Problem:
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in
a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects
with attributes startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

For example:

  {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
  {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
  ]

your function would return:

  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
  ]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing
our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00am.
But we want the function to work even for very large numbers, like Unix timestamps. In any case, the
spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.
*/

function mergeRanges(ranges) {
  // Sort meeting time ranges by start time
  let sortedRanges = ranges.slice().sort((a, b) => a.startTime - b.startTime);
  // Create mergedRanges array and add first meeting
  let mergedRanges = [sortedRanges[0]];

  for(let i = 1; i < sortedRanges.length; i++) {
    let currentRange = sortedRanges[i];
    let lastMergedRange = mergedRanges[mergedRanges.length - 1];

    // If there is an overlap, merge time ranges
    if(currentRange.startTime <= lastMergedRange.endTime) {
      lastMergedRange.endTime = Math.max(currentRange.endTime, lastMergedRange.endTime);
    // Else, leave current range as is and add to mergedRanges array
    } else {
      mergedRanges.push(currentRange);
    }
  }

  return mergedRanges;
}
