/**
 * @param {string} s
 * @return {string}
 */

//reverse every character in each word in the input string
var reverseWords = function (s) {
   //split the string into an array of words
   let words = s.split(' ');
   //loop through the words
   for (let i = 0; i < words.length; i++) {
      //reverse each word
      words[i] = words[i].split('').reverse().join('');
   }
   //join the words back together
   return words.join(' ');
}