package main

func main() {
	validPalindrome("deeee")                  // true
	validPalindrome("eeccccbebaeeabebccceea") // false

	// validPalindrome("aba")
	// validPalindrome("abca")

}

// Recursive
func validPalindrome(s string) bool {
	l := 0
	r := len(s) - 1

	if s[l] == s[r] {
		return isValidPalindrome(s, l+1, r-1, false)
	}

	return isValidPalindrome(s, l+1, r, true) || isValidPalindrome(s, l, r-1, true)
}

func isValidPalindrome(s string, l, r int, isRemoved bool) bool {
	if l >= r {
		return true
	}

	if s[l] == s[r] {
		return isValidPalindrome(s, l+1, r-1, isRemoved)
	}

	if isRemoved {
		return false
	}

	return isValidPalindrome(s, l+1, r, true) || isValidPalindrome(s, l, r-1, true)
}

// Iterative
func validPalindrome2(s string) bool {
	l := 0
	r := len(s) - 1
	for l < r {
		if s[l] != s[r] {
			return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1)
		}
		l++
		r--
	}

	return true
}

func isPalindrome(s string, l, r int) bool {
	for l < r {
		if s[l] != s[r] {
			return false
		}
		l++
		r--
	}

	return true
}
