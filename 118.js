/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
   let result = [];
   for (let i = 0; i < numRows; i++) {
      result[i] = new Array(i + 1).fill(0);
      result[i][0] = result[i][i] = 1;
      for (let j = 1; j < i; j++) {
         result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
   }
   return result;
};

generate(5);
// generate(1);

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Input: numRows = 1
// Output: [[1]]