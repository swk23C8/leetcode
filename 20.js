/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
   if (s.length % 2 !== 0) return false;

   var stack = [];
   for (let c of s) {
      console.log(c)
      console.log(stack);
      console.log(stack[stack.length - 1])

      if (c === ')' && stack[stack.length - 1] === '(') {
         stack.pop()
      } else if (c === '}' && stack[stack.length - 1] === '{') {
         stack.pop()
      } else if (c === ']' && stack[stack.length - 1] === '[') {
         stack.pop()
      } else {
         stack.push(c)
      }
   }

   return !stack.length
};


// // true
// console.log(isValid("()"));
// // true
// console.log(isValid("()[]{}"));
// // false
// console.log(isValid("(]"));
// true
console.log(isValid("{[]}"));
// // false
// console.log(isValid("("));
// // false
// console.log(isValid("([)]"));