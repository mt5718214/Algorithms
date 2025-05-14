/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;

  // 用來存每一行的字串, 最後join起來
  let rows = new Array(numRows).fill(""); // Array.from({ length: numRows }, () => "");
  // 根據goingDown來決定要寫到哪一個row, 規則是先往下走, 走到底就往上一層, 上到底就往下一層, 重複這樣的規律
  let curRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; i++) {
    rows[curRow] += s[i]; // 把當前的字母加到對應的row上
    if (curRow === 0) goingDown = true; // 如果在第一行, 就開始往下走
    if (curRow === numRows - 1) goingDown = false; // 如果在最後一行, 就開始往上走
    // 上面兩行也可以合併
    // if(curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1; // 根據goingDown來決定要寫到哪一個row
  }

  console.log(rows.join(""));
  return rows.join(""); // 把每一行的字串join起來
};

convert("PAYPALISHIRING", 3); // "PAHNAPLSIIGYIR"
convert("PAYPALISHIRING", 4); // "PINALSIGYAHRPI"
convert("A", 1); // "A"
convert("AB", 1); // "AB"
