/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
   // return s.toLowerCase();
   let result = '';
   for (let i = 0; i < s.length; i++) {
      let charCode = s.charCodeAt(i);
      if (charCode < 91 && charCode > 64) {
         result += String.fromCharCode(charCode + 32);
      }
      else{
         result += s.charAt(i);
      }
   }
   return result;
};
// A : 65 , Z : 90

// a : 97 , z : 122
toLowerCase('Hello');

toLowerCase('LOVELY');


// Given a string s, return the string after replacing every uppercase letter
// with the same lowercase letter.

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"