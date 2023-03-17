/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// O(n * mlogm) 需排序
var groupAnagrams = function(strs) {
    if(strs.length === 0) return []
    if(strs.length === 1) return [strs]

    const map = new Map()

    strs.forEach(v => {
        const key = [...v].sort().join('')

        if(!map.has(key)) map.set(key, [v])
        else map.get(key).push(v)
    })

    return [...map.values()]
};

// O(n*m)  建立hash值
var groupAnagrams = function (strs) {
  const map = {}
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

  strs.forEach(v => {
    const key = v.split("").reduce((acc, cur) => acc *= primes[cur.charCodeAt() - 97], 1)

    if (!map[key]) map[key] = [v]
    else map[key].push(v)
  })

  return Object.values(map)
}