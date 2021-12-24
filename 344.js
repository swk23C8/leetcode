/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//reverse array elements
var reverseString = function (s) {
   for (let i = 0; i < Math.floor(s.length / 2); i++) {
      let tmp = s[i];
      s[i] = s[s.length - i - 1];
      s[s.length - i - 1] = tmp;
   }
   return s;
};
let s = ["h", "e", "l", "l", "o"];
s = reverseString(s);
console.log(s);
console.log('test');
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]