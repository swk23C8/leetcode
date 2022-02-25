/*
 * @lc app=leetcode id=2114 lang=javascript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
	let max = 0;

	for (let i = 0; i < sentences.length; i++) {
		let currentWord = sentences[i]
		let currentCount = 1;

		for (let j = 0; j < currentWord.length; j++) {
			if (currentWord[j] == ' ') {
				currentCount++;
			}
			if (currentCount > max) {
				max = currentCount;
			}
		}
	}
	return max;
};
// @lc code=end

