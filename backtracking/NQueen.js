let perfect = 0;
// NQueen(4); // 2
// NQueen(5); // 10
// NQueen(6); // 4
// NQueen(7); // 40
NQueen(8); // 92
console.log("total solutions: " + perfect);

function NQueen(n) {
  // 先做出棋盤
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  // 初始化, 把棋盤上所有的位置都設置成null
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = null;
    }
  }

  let i = 0;
  let j = 0;
  let loop = true;
  while (loop) {
    arr[i][j] = "Q";
    // 檢查當前位置是否可以放置Queen
    let violation = false; // 先預設為false表示可以放置
    let k = 0;
    // 檢查同一個column
    while (k < i) {
      if (arr[k][j] === "Q") violation = true;
      k++;
    }
    // 檢查同一個row
    k = 0;
    while (k < j) {
      if (arr[i][k] === "Q") violation = true;
      k++;
    }
    // 這邊開始檢查往左下的斜對角, 所以多宣告一個變數l, i+k控制往下, j+l控制往左
    k = 1;
    let l = -1;
    while (i + k < n && j + l >= 0) {
      if (arr[i + k][j + l] === "Q") violation = true;
      k++;
      l--;
    }
    // 檢查往左上的斜對角, 因為都是負的, 所以用k控制即可
    k = -1;
    while (i + k >= 0 && j + k >= 0) {
      if (arr[i + k][j + k] === "Q") violation = true;
      k--;
    }

    if (!violation) {
      // violation為false表示可以放置, 所以這邊要移動到隔壁一列去放置Queen
      if (j === n - 1) {
        // violation為false 且j為n-1（表示已經走到最後一個column）到這邊表示已經找到一個解了
        perfect++;

        // 要繼續找下一個解, 所以要把原本的位置的值改為null, 然後往下走（i++）
        arr[i][j] = null;
        i++;
      } else {
        // 如果已經在當前column放置好Queen且不是最後一個column, 則要從下一個column的最上面開始走, 所以j要加一, i重置為0
        i = 0;
        j++;
      }
    }

    if (violation) {
      // violation為true表示不可以放置, 所以把當前位置的值設為null, 然後往下走
      arr[i][j] = null;
      i++;
    }

    // 因為上面不管violation是否為true, 都會i++, 所以要確認i沒有超過棋盤的最大高度, 如果超過要退回前一個column, 並且查看前一個column的狀態
    function check() {
      // 退回前一個column
      j--;

      // 檢查該column中, 哪一個位置是Q並且把值改為null後, 往下走一個位置(i = b + 1)
      for (let b = 0; b < arr.length; b++) {
        if (arr[b][j] === "Q") {
          arr[b][j] = null;
          i = b + 1;
          break;
        }
      }
    }

    while (i >= n) {
      check();

      // 在回朔的過程中, 如果j小於0, 代表已經找完所有的可能性了
      if (j < 0) {
        loop = false;
        break;
      }
    }
  }
}
