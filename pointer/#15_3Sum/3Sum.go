package main

import (
	"fmt"
	"sort"
)

func main() {
	threeSum([]int{-1, 0, 1, 2, -1, -4}) // [[-1,-1,2],[-1,0,1]]
	threeSum([]int{0, 1, 1})             // []
	threeSum([]int{0, 0, 0})             // [[0,0,0]]
	threeSum([]int{-2, 0, 0, 2, 2})      // [[-2, 0, 2]]
}

func threeSum(nums []int) [][]int { // TC: O(n ^ 2), SC: O(n)
	sort.Ints(nums)
	result := [][]int{}

	for i, num := range nums[:len(nums)-2] {
		l, r := i+1, len(nums)-1

		if i > 0 && num == nums[i-1] {
			continue
		}

		for l < r {
			total := num + nums[l] + nums[r]
			if total == 0 {
				result = append(result, []int{num, nums[l], nums[r]})
				// for l < r && nums[l] == nums[l+1] {
				// 	l++
				// }
				for l < r && nums[r] == nums[r-1] {
					r--
				}

				l++
				r--
			} else if total > 0 {
				r--
			} else {
				l++
			}
		}
	}

	fmt.Println(result)
	return result
}
