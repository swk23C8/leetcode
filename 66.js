/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
   for (var i = digits.length - 1; i >= 0; i--) {
      digits[i]++;
      if (digits[i] > 9) {
         digits[i] = 0;
      } else {
         return digits;
      }
   }
   digits.unshift(1);
   return digits;
};

plusOne([1, 2, 3]);
plusOne([4, 3, 2, 1]);
plusOne([9, 9, 9]);
plusOne([9]);
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);