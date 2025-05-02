/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// space O(m+n) time O(m*n)
var setZeroes = function (matrix) {
  // 用set來儲存遍歷過是0的位置的i和j
  const iSet = new Set();
  const jSet = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        iSet.add(i);
        jSet.add(j);
      }
    }
  }

  [...iSet.values()].forEach((i) => {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = 0;
    }
  });

  [...jSet.values()].forEach((i) => {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][i] = 0;
    }
  });

  console.log(matrix);
};

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

setZeroes([
  [1, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 0, 1, 5],
]); // [[0,0,0,0],[3,0,5,0],[0,0,0,0]]
