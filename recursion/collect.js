let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]]
let result = []
/**
 * return all values in the array
 * @param {} arr
 */
function collecter(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      collecter(arr[i])
    } else {
      result.push(arr[i])
    }
  }
}

collecter(arrs)
console.log(result);