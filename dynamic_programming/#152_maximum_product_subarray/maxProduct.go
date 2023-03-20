package main

import (
	"fmt"
)

func main() {
	maxProduct([]int{2, 3, -2, 4})     // 6
	maxProduct([]int{2, 3, -2, 4, -2}) // 96
	maxProduct([]int{-2, 0, -1})       // 0
}

func maxProduct(nums []int) int {
	curr_max, curr_min, final_max := nums[0], nums[0], nums[0]

	for _, val := range nums[1:] {
		next_max := curr_max * val
		next_mix := curr_min * val
		curr_max = maxOf(val, next_max, next_mix)
		curr_min = minOf(val, next_max, next_mix)
		final_max = maxOf(final_max, curr_max)
	}

	fmt.Println(final_max)
	return final_max
}

func minOf(vars ...int) int {
	min := vars[0]

	for _, val := range vars {
		if val < min {
			min = val
		}
	}

	return min
}

func maxOf(vars ...int) int {
	max := vars[0]

	for _, val := range vars {
		if val > max {
			max = val
		}
	}

	return max
}
