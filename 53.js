/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
   let max = nums[0];
   let current = nums[0];

   for (let i = 1; i < nums.length; i++){
      current = Math.max(nums[i], current+nums[i]);

      max = Math.max(max, current);
   }

   return max;
};

// // 6
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// // 1
// maxSubArray([1]);

// 23
maxSubArray([5, 4, -1, 7, 8]);