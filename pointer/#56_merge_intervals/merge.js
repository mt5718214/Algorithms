/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let curr = intervals[0];
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];

    if (curr[1] >= next[0]) {
      curr[1] = Math.max(curr[1], next[1]);
    } else {
      curr = next;
      result.push(next);
    }
  }

  console.log(result);
  return result;
};

merge([
  [1, 3],
  [15, 18],
  [2, 6],
  [8, 10],
]); // [[1,6],[8,10],[15,18]]

merge([
  [1, 4],
  [4, 5],
]); // [[1, 5]]

merge([
  [1, 4],
  [2, 3],
]); // [[1,4]]
