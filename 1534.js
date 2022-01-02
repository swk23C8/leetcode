/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
   let result = 0;
   let conditionA = "Math.abs(arr[i] - arr[j]) <= a";
   let conditionB = "Math.abs(arr[j] - arr[k]) <= b";
   let conditionC = "Math.abs(arr[i] - arr[k]) <= c";
   for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length-1; j++) {
         for (let k = 2; k < arr.length-2; k++) {
            if (conditionA && conditionB && conditionC) {
               result++;
            }
         }
      }
   }
   return result;
};

countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3);
// Given an array of integers arr, and three integers a, b and c.
//  You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].