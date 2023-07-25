/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1
    let r = n
    let mid = Math.floor((r + l) / 2)

    while (l < r) {
      if (isBadVersion(mid)) {
        r = mid - 1
      } else {
        l = mid + 1
      }

      mid = Math.floor((r + l) / 2)
    }

    return isBadVersion(mid) ? mid : mid + 1
  };
};

/**
 * 想法是如果第n個版本是bad version那麼後面都會是bad version
 * 那麼利用二元搜尋, 最中間如果是false, 代表bad version會在右邊
 * 如果是true要檢查左邊
 * 
 * 最後的回傳結果, 因為mid有可能會是true或false, 如果是true表示mid就是first bad version
 * 如果是false表示mid是last good version, mid+1就會是first bad version
 */
