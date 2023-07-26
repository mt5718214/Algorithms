package main

func main() {
	isSubsequence("abc", "ahbgdc") // true
	isSubsequence("axc", "ahbgdc") // false
}

func isSubsequence(s string, t string) bool {
	if len(s) > len(t) {
		return false
	}

	p1, p2 := 0, 0

	for p1 < len(s) && p2 < len(t) {
		if s[p1] == t[p2] {
			p1++
		}
		p2++
	}

	return p1 == len(s)
}
