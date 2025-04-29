/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = Array.from({ length: 9 }, () => new Set()); // 檢查橫的數字, 每一個row都用一個set來儲存
  const cols = Array.from({ length: 9 }, () => new Set()); // 檢查直的數字, 每一個column都用一個set來儲存
  const boxes = Array.from({ length: 9 }, () => new Set()); // 檢查3x3的數字, 每一個box都用一個set來儲存

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === ".") continue;

      // 計算boxIdx
      const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(val) || cols[j].has(val) || boxes[boxIdx].has(val)) {
        return false;
      }

      rows[i].add(val);
      cols[j].add(val);
      boxes[boxIdx].add(val);
    }
  }

  return true;
};
