package main

import "fmt"

func main() {
	plusOne([]int{1, 2, 3})    // 124
	plusOne([]int{4, 3, 2, 1}) // 4322
	plusOne([]int{9, 9, 9})    // 1000
}

func plusOne(digits []int) []int {
	for i := len(digits) - 1; i >= 0; i-- {
		if digits[i] == 9 {
			digits[i] = 0
		} else {
			digits[i] += 1

			fmt.Println(digits)
			return digits
		}
	}

	nums := make([]int, len(digits)+1)
	nums[0] = 1

	fmt.Println(nums)
	return nums
}
