/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
   // O(N)
   let duplicates = {}
   for (let i = 0; i < nums.length; i++) {
      if (!duplicates[nums[i]]) {
         duplicates[nums[i]] = true;
      }
      else {
         delete duplicates[nums[i]];
      }
   }
   return Object.keys(duplicates)[0];
};
// 1
singleNumber([2, 2, 1]);
// // 4
// singleNumber([4,1,2,1,2]);