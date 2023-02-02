package main

import "fmt"

func main() {
	reverseVowels1("leetcode")
	reverseVowels1("ABCa")

	reverseVowels2("leetcode")
	reverseVowels2("ABCa")
}

func reverseVowels1(s string) string {
	res := make([]byte, len(s))

	set := make(map[byte]bool)
	set['a'] = true
	set['e'] = true
	set['i'] = true
	set['o'] = true
	set['u'] = true
	set['A'] = true
	set['E'] = true
	set['I'] = true
	set['O'] = true
	set['U'] = true

	i, j := 0, len(s)-1
	for i <= j {
		if !set[s[i]] {
			res[i] = s[i]
			i++
			continue
		}

		if !set[s[j]] {
			res[j] = s[j]
			j--
			continue
		}

		if i > j {
			break
		}

		res[i], res[j] = s[j], s[i]
		i++
		j--
	}

	fmt.Println(string(res))
	return string(res)
}

func reverseVowels2(s string) string {
	res := make([]byte, len(s))

	i, j := 0, len(s)-1
	for i <= j {
		if !isVowel(s[i]) {
			res[i] = s[i]
			i++
			continue
		}

		if !isVowel(s[j]) {
			res[j] = s[j]
			j--
			continue
		}

		if i > j {
			break
		}

		res[i], res[j] = s[j], s[i]
		i++
		j--
	}

	fmt.Println(string(res))
	return string(res)
}

func isVowel(s byte) bool {
	if s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u' ||
		s == 'A' || s == 'E' || s == 'I' || s == 'O' || s == 'U' {
		return true
	}

	return false
}
