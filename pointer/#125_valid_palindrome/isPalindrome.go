package main

import (
	"fmt"
	"regexp"
	"strings"
)

func main() {
	// isPalindrome("race a car")
	isPalindrome2("race a car")                     // false
	isPalindrome2("A man, a plan, a canal: Panama") // true
	isPalindrome2("0P")                             // false
}

func isPalindrome(s string) bool {
	regexp, _ := regexp.Compile(`[^a-zA-Z0-9]`)

	str := regexp.ReplaceAllString(s, "")
	str = strings.ToLower(str)
	for l, r := 0, len(str)-1; l < r; l, r = l+1, r-1 {
		if str[l] != str[r] {
			fmt.Println(false)
			return false
		}
	}

	fmt.Println(true)
	return true
}

func isPalindrome2(s string) bool {
	isAlphanum := func(b byte) bool {
		return (b >= 48 && b <= 57) || (b >= 65 && b <= 90) || (b >= 97 && b <= 122)
		//			  ^			^			  ^			^			  ^			 ^
		//ASCII Table '0'       '9'			 'A'		'Z'			 'a'		'z'
	}

	for l, r := 0, len(s)-1; l < r; l, r = l+1, r-1 {
		for l < r && !isAlphanum(s[l]) {
			l++
		}

		for l < r && !isAlphanum(s[r]) {
			r--
		}

		sl, sr := s[l], s[r]
		if sl >= 65 && sr >= 65 { // check if sl, sr is alpha char
			if sl > sr { // change char to lowercase if sl equal sr (EX: 'a' <=> 'A'), if doesn't mattar not equal, it will check at line57.
				sr += 32
			} else if sl < sr {
				sl += 32
			}
		}

		if sl != sr {
			fmt.Println(false)
			return false
		}
	}

	fmt.Println(true)
	return true
}
