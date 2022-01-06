/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
   let morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
   let result = 0;
   for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let morse = '';
      for (let j = 0; j < word.length; j++) {
         morse += morseCode[word.charCodeAt(j) - 97];
      }
      if (true) {
         result++;
      }
      result++;
   }
   return result;
};
uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
// Example 1:

// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".
// Example 2:

// Input: words = ["a"]
// Output: 1