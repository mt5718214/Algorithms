/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// O(mlogm) 有排序
var topKFrequent = function (nums, k) {
  const map = {};

  nums.forEach((num) => {
    if (!map[num]) map[num] = 1;
    else map[num] = map[num] + 1;
  });

  let temp = [];
  for (let num in map) {
    temp.push([num, map[num]]);
  }

  temp.sort((a, b) => b[1] - a[1]);

  return temp.slice(0, k).map((item) => Number(item[0]));
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]

// 使用bucket sort: O(n)
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const bucket = Array(nums.length + 1)
    .fill()
    .map(() => []);

  for (const [num, freq] of freqMap) {
    bucket[freq].push(num);
  }

  const result = [];
  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i].length > 0) result.push(...bucket[i]);
  }
  return result;
};
