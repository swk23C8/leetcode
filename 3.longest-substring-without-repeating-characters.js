/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
	let seen = new Set();
	let longest = 0;
	let l = 0;
	for (let r = 0; r < s.length; r++) {
		console.log(seen);
		while (seen.has(s[r])) {
			seen.delete(s[l]);
			l++;
		}
		seen.add(s[r]);
		longest = Math.max(longest, r - l + 1);
	}
	return longest;
};
// @lc code=end

