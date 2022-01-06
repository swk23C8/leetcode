/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
   if (s.length !== t.length) {
      return false;
   }
   const map = {};
   for (let i = 0; i < s.length; i++) {
      if (map[s[i]]) {
         map[s[i]]++;
      }
      else {
         map[s[i]] = 1;
      }
   }

   for (let j = 0; j < t.length; j++){
      if (map[t[j]]){
         map[t[j]]--;
      }
      else{
         return false;
      }
   }
   return true;
};

// true
console.log(isAnagram("anagram", "nagaram"));
// // false
// console.log(isAnagram("rat", "car"));
// // true
// console.log(isAnagram("a", "a"));
// // false
// console.log(isAnagram("aacc", "ccac"));