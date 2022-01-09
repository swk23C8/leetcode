/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
   let prefix = [];
   let suffix = [];
   let result = [];

   prefix[0] = 1;
   suffix[nums.length - 1] = 1;
   for (let i = 1; i < nums.length; i++){
      prefix[i] = prefix[i-1]*nums[i-1];
   }
   for (let j = nums.length - 2; j>=0; j--) {
      suffix[j] = nums[j+1] * suffix[j+1];
   }
   for (let k = 0; k < nums.length; k++) {
      result[k] = suffix[k] * prefix [k];
   }
   return result;
};

//[24,12,8,6]
productExceptSelf([1, 2, 3, 4]);
//[0,0,9,0,0]
productExceptSelf([-1, 1, 0, -3, 3]);