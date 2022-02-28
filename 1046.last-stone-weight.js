/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
	// sort the array
	// loop through the array
	// if the length is 1, return the last element
	// if the length is 2, return the difference between the two elements
	// otherwise, remove the last two elements and add them together
	// sort the array
	// return the last element

	// sort array in ascending order
	stones.sort((a, b) => a - b);
	// ensure that there is more than 1 element in the array
	while (stones.length > 1) {
		// if there are 2 elements in the array, return the difference between the two elements
		if (stones.length === 2) {
			return stones[1] - stones[0];
		}
		let El1 = stones.pop();
		let El2 = stones.pop();
		let newEl = stones.push(El1 - El2);

		// console.log(El1 + "-" + El2)
		// console.log(El1 - El2)
		// stones.push(stones.pop() - stones.pop());

		// sort again
		stones.sort((a, b) => a - b);
	}
	console.log(stones)
	return stones[0];
};
// @lc code=end

