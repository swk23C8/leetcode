/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
   let profit = 0;
   let min = prices[0];

   for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min) {
         min = prices[i];
      }
      else if (prices[i] - min > profit) {
         profit = prices[i] - min;
      }
   };
   return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))