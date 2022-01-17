
var wordPattern = function (pattern, s) {
   let patterns = new Set();
   let wordMap = new Map();
   let tokens = s.split(' ');

   if (tokens.length != pattern.length) {
      return false;
   }

   for (let g = 0; g < pattern.length; g++) {
      let c = pattern[g];
      if (patterns.has(c)) {
         if (wordMap.get(tokens[g]) != c) {
            return false;
         }
      }
      else {
         if (wordMap.has(tokens[g])) {
            return false;
         }
         patterns.add(c);
         wordMap.set(tokens[g], c);
      }
   }
   return true;

};

wordPattern('abba', 'dog cat cat dog');

// wordPattern('abba', 'dog cat cat fish');

// wordPattern('aaaa', 'dog cat cat dog');