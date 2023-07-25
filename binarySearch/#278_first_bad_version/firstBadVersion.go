package main

import (
	"fmt"
)

func main() {
	firstBadVersion(3)
	firstBadVersion(7)
}

/**
 * Forward declaration of isBadVersion API.
 * @param  version  your guess about first bad version
 * @return 	 	      true if current version is bad
 *			            false if current version is good
 * func isBadVersion(version int) bool;
 */
func firstBadVersion(n int) int {
	var mid int
	l, r := 1, n

	for l <= r {
		mid = (l + r) / 2
		if isBadVersion(mid) {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}

	if isBadVersion(mid) {
		fmt.Println(mid)
		return mid
	}

	fmt.Println(mid + 1)
	return mid + 1
}

func isBadVersion(version int) bool
