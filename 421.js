/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
   let max = 0;
   let tempArray = [];
   for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
         if ((nums[i] ^ nums[j]) > max) {
            max = nums[i] ^ nums[j];
         }
      }
   }

   return max;
};


//28
findMaximumXOR([3, 10, 5, 25, 2, 8]);
// //127
// findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]);
