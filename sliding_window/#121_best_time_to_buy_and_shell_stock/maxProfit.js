/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let start = 0;
  let end = 1;
  let profit = 0;

  while (end < prices.length) {
    // 有獲利且目前獲利大於profit則profit = 目前獲利
    if (
      prices[end] - prices[start] > 0 &&
      prices[end] - prices[start] > profit
    ) {
      profit = prices[end] - prices[start];
    } else if (prices[end] - prices[start] <= 0) {
      // 獲利為負的, 表示第start天的買進價格比較高, 應改為第end天買進
      start = end;
    }
    end++;
  }

  console.log(profit);
  return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]); // 5
maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]); // 9
maxProfit([7, 6, 4, 3, 1]); // 0

// var maxProfit = function(prices) {
//     let minprice = 10001
//     let maxprofit = 0
//     for(let i = 0; i < prices.length; i++) {
//         if(prices[i] < minprice) {
//             minprice = prices[i]
//         } else if(prices[i] - minprice > maxprofit) {
//             maxprofit = prices[i] - minprice
//         }
//     }
//     return maxprofit
// };
