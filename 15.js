/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
   let triplets = [];
   for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
         for (let k = 0; k < nums.length; k++) {
            if (nums[i] != nums[j] && nums[i] != nums[k] && nums[j] != nums[k] && nums[i] + nums[j] + nums[k] == 0) {
               triplets += [nums[i], nums[i + 1], nums[i + 2]]
            }
         }
      }
   }
   return triplets;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
   for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
         if (nums[i] + nums[j] === target) {
            return [i, j];
         }
      }
   }
};


// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:
// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
threeSum([-1, 0, 1, 2, -1, -4]);


// Example 2:
// Input: nums = []
// Output: []
threeSum([]);

// Example 3:
// Input: nums = [0]
// Output: []
threeSum([0]);