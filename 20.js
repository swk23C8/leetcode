/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
   // let brackets = {};
   // if (s.length % 2 !== 0) return false;

   // for (let i = 0; i < s.length; i++) {
   //    if (s[i] == '(' || '{' || '[') {
   //       if (brackets[s[i]]) {
   //          brackets[s[i]]++;
   //       }
   //       else {
   //          brackets[s[i]] = 1;
   //       }
   //    }
   // }

   // for (let j = 0; j < s.length/2; j++) {
   //    if (brackets['('] && brackets[')']) {
   //       brackets[')']--;
   //    }
   //    else if (brackets['['] && brackets['[']){
   //       brackets[']']--;
   //    }
   //    else if (brackets['{'] && brackets['{']){
   //       brackets['}']--;
   //    }
   //    else{
   //       return false;
   //    }
   // }
   // return brackets;
   let brackets = s;
   let startIndex = 0;
   let endIndex = 0;
   for (let i = 0; i < s.length; i++) {
      if (brackets[startIndex] == ('(') && brackets[startIndex+1] == (')')) {
         brackets = brackets.slice(startIndex, endIndex+1);
      }
      else if (brackets[startIndex] == ('[') && brackets[startIndex+1] == (']')) {
         brackets = brackets.slice(startIndex+2);
      }
      else if (brackets[startIndex] == ('{') && brackets[startIndex+1] == ('}')) {
         brackets = brackets.slice(startIndex+2);
      }
      else {
         startIndex++;

      }
   }
   return brackets;
};

// true
console.log(isValid("()"));
// true
console.log(isValid("()[]{}"));
// false
console.log(isValid("(]"));
// true
console.log(isValid("{[]}"));
// false
console.log(isValid("("));
// false
console.log(isValid("([)]"));