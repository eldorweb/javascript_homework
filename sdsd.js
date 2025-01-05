// You are given a string s and a pattern string p, where p contains exactly one '*' character.

// The '*' in p can be replaced with any sequence of zero or more characters.

// Return true if p can be made a substring of s, and false otherwise.

// A substring is a contiguous non-empty sequence of characters within a string.

 

// Example 1:

// Input: s = "leetcode", p = "ee*e"

// Output: true

// Explanation:

// By replacing the '*' with "tcod", the substring "eetcode" matches the pattern.

// Example 2:

// Input: s = "car", p = "c*v"

// Output: false

// Explanation:

// There is no substring matching the pattern.

// Example 3:

// Input: s = "luck", p = "u*"

// Output: true

// Explanation:

// The substrings "u", "uc", and "uck" match the pattern.
// 1 <= s.length <= 50
// 1 <= p.length <= 50
// s contains only lowercase English letters.
// p contains only lowercase English letters and exactly one '*'




var hasMatch = function(s, p) {
    let pArr = p.split('*');
    let p1 = pArr[0];
    let p2 = pArr[1];
    let s1 = s.slice(0, p1.length);
    let s2 = s.slice(s.length - p2.length);
    return s1 === p1 && s2 === p2;
}