/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
   if (alphabet.length > sentence.length) return false;
   for (let i = 0; i < sentence.length; i++) {
      if (alphabet.includes(sentence[i])) {
         alphabet = alphabet.replace(sentence[i], '');
      }
   }
   return alphabet.length == 0;

};
checkIfPangram('thequickbrownfoxjumpsoverthelazydog');

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters,
// return true if sentence is a pangram, or false otherwise.


// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.