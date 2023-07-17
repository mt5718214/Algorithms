/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let start = 0
  let end = 1
  let maxProfit = 0

  while (end < prices.length) {
    /**
     * prices[end] - prices[start] > 0 && prices[end] - prices[start] > maxProfit
     * 以上條件是說如果profit是正的且大於目前的最大收益時, 才將profit存下來
     */
    if (prices[end] - prices[start] > 0 && prices[end] - prices[start] > maxProfit) {
      maxProfit = prices[end] - prices[start]
    } else if (prices[end] - prices[start] <= 0) {
      /**
       * 當profit為負的時候, 表示我們碰到了更低的價格
       * 所以將目前的最低價格改為此價格
       */
      start = end
    }
    end++
  }

  return maxProfit
};