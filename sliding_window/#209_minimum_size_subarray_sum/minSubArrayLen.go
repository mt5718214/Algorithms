package main

import (
	"fmt"
	"math"
)

func main() {
	minSubArrayLen(7, []int{2, 3, 1, 2, 4, 3}) // 2
	minSubArrayLen(4, []int{1, 4, 4})          // 1
	minSubArrayLen(11, []int{1, 1, 1, 1})      // 0

}

func minSubArrayLen(target int, nums []int) int {
	start, end, total, minLen := 0, 0, 0, math.MaxInt32

	for start < len(nums) {
		if total < target && end < len(nums) {
			total += nums[end]
			end++
		} else if total >= target {
			currentLen := end - start
			if minLen > currentLen {
				minLen = currentLen
			}
			total -= nums[start]
			start++
		} else if end >= len(nums) {
			break
		}
	}

	if minLen == math.MaxInt32 {
		fmt.Println("cannot find minLen")
		return 0
	}

	fmt.Println(minLen)
	return minLen
}
