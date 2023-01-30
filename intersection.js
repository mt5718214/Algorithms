function intersection(arr1, arr2) {
  // BigO(n*m)
  const result = []
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length;j++) {
      if(arr1[i] === arr2[j]) {
        result.push(arr1[i])
        break
      }
    }
  }
  return result
}

console.log(intersection([1, 2, 3], [1, 5, 13 ,3, 17]));

function counter(arr1, arr2) {
  // BigO(n+m)
  const result = []
  const counter = {}
  for(let i = 0; i < arr1.length; i++) {
    console.log(counter[arr1[i]]);
    if(!counter[arr1[i]]) {
      counter[arr1[i]] = 1
    } else {
      counter[arr1[i]] += 1
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!counter[arr2[i]]) {
      counter[arr2[i]] = 1
    } else {
      counter[arr2[i]] += 1
    }
  }

  for(let i in counter) {
    if(counter[i] > 1) {
      result.push(Number(i))
    }
  }
  return result
}

console.log(counter([1, 2, 3], [1, 5, 13, 3, 17]));