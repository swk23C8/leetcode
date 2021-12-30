/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
   let result = [];
   for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
         for (let k = 0; k < nums3.length; k++) {
            let counter = 0;
            if (nums1[i] === nums2[j] && nums1[i] === nums3[k]) {
               counter++;
               if (counter === 2) {
                  result.push(nums1[i]);
               } counter = 0;
            }
            if (nums2[j] === nums1[i] && nums2[j] === nums3[k]) {
               counter++;
               if (counter === 2) {
                  result.push(nums2[j]);
               } counter = 0;
            }
            if (nums3[k] === nums1[i] && nums3[k] === nums2[j]) {
               counter++;
               if (counter === 2) {
                  result.push(nums3[k]);
               } counter = 0;
            }
         }
      }
   }

   return result;
};

// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing
// all the values that are present in at least two out of the three arrays.
// You may return the values in any order.

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.