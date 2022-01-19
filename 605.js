/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
   for (let i = 0; i < flowerbed.length; i++) {
      if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i == flowerbed.length-1 || flowerbed[i + 1] === 0)) {
         flowerbed[i] = 1;
         n-=1;
      }
      if (n<=0){
         return true;
      }
   };
   return false;
}

// true
canPlaceFlowers([1, 0, 0, 0, 1], 1);
// false
canPlaceFlowers([1, 0, 0, 0, 1], 2);
// true
canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)
// false
canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)


1, 0
// 1 0 1 
2, 0
// 1 0 0 1 
3, 1
// 1 0 0 0 1
4, 1
// 1 0 0 0 0 1
5, 2
// 1 0 0 0 0 0 1
6, 2
// 1 0 0 0 0 0 0 1
7, 3
// 1 0 0 0 0 0 0 0 1
8, 3
// 1 0 0 0 0 0 0 0 0 1

4 / 2 - (((-1) ** 4) - 1) / (-4)