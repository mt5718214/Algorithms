package main

func main() {
	climbStairs(3) // 3
	climbStairs(4) // 5
	climbStairs(5) // 8
}

func climbStairs(n int) int {
	one_step_before := 2
	two_step_before := 1
	all_ways := 0

	if n <= 3 {
		return n
	}

	for i := 2; i < n; i++ {
		all_ways = one_step_before + two_step_before
		two_step_before = one_step_before
		one_step_before = all_ways
	}

	return all_ways
}
