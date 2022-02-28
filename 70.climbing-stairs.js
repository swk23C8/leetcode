/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	for (let i = 0; i < n; i++) {
		// n = 1; 1; 1
		// n = 2; 2; 1+1, 2
		// n = 3; 3; 1+1+1, 1+2, 2+1
		// n = 4; 5; 1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2
		// n = 5; 8; 1+1+1+1+1, 1+2+2, 2+1+2, 2+2+1, 1+1+1+2, 1+1+2+1, 2+1+1+1, 1+2+1+1
	}
};
// @lc code=end

