/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
   let stringified = n.toString();
   let product = 1;
   let sum = 0;

   for (let i = 0; i < stringified.length; i++) {
      product *= parseInt(stringified[i]);
      sum += parseInt(stringified[i]);
   }
   return product - sum;
};


// Given an integer number n, return the difference between the product of its digits
// and the sum of its digits.


// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15