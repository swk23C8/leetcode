/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

//brute force
 var restoreString = function(s, indices) {
   let len=s.length;
   let str=[]
   for (i=0;i<len;i++){
       str[indices[i]]=s.charAt(i)   //new array with filling index values with corresponding characters
   }
   return str.join("")  //converting back to string
};

//approach: two pointer, map, 
//since we know the length of the string and the array is the same
//we can just have one pointer point to the string and one point to the array elem
//we can just loop through the length of indices
//we can make the elem of indices the key and the string character as a value
//then loop till the length of the s, where each loop, we get the value of the map and store it in a string variable
var restoreString = function(s, indices) {
   let map = new Map();
   let newStr = '';
   
   //setting up map (key: indices element, value: s element)
   for(let i = 0; i < indices.length; i++){
       map.set(indices[i], s[i]);
   }
   
   //storing the value into string variable, by accessing the key in a map
   for(let i = 0; i < s.length; i++){
       newStr += map.get(i);
   }
   
   return newStr;
};

// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position
// moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.