/**
 * @param {number[]} nums
 * @return {number}
 */
// time complexity: O(n)
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  const set = new Set(nums);

  let best = 1;
  let cnt = 1;
  // 遍歷set中的值即可, 因為最差的情況是有可能像是1~25000, 然後後面有超多的0, 這樣就會超時
  for (let num of set) {
    if (!set.has(num - 1)) {
      let x = num;
      while (set.has(x + 1)) {
        cnt++;
        x++;
      }
    }

    best = Math.max(best, cnt);
    cnt = 1; // 重置cnt
  }

  console.log(best);
  return best;
};

longestConsecutive([1, 0, 0, 1, 2]); // 3
longestConsecutive([100, 4, 200, 1, 3, 2]); // 4
longestConsecutive([0, -1, 2]); // 2
longestConsecutive([0]); // 1
longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]); // 9

// time complexity: O(nlogn) because of sorting
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b);

  let best = 1;
  let len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        len++;
      } else {
        len = 1;
      }
    }

    best = Math.max(best, len);
  }

  return best;
};
