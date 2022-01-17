/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
   // locate occupied seats and find the closest seat to each occupied seat
   let occupiedSeats = [];
   for (let i = 0; i < seats.length; i++) {
      if (seats[i] === 1) {
         occupiedSeats.push(i);
      }
   }
   console.log(occupiedSeats);
   let closestSeats = [];
   for (let i = 0; i < occupiedSeats.length; i++) {
      if (i === 0) {
         closestSeats.push(occupiedSeats[i] - 0);
      } else {
         closestSeats.push(occupiedSeats[i] - occupiedSeats[i - 1]);
      }
   }
   // find the max of the closest seats   
   let max = 0;
   for (let i = 0; i < closestSeats.length; i++) {
      if (closestSeats[i] > max) {
         max = closestSeats[i];
      }
   }
   return max;
};

maxDistToClosest([1, 0, 0, 0, 1, 0, 1]);
// maxDistToClosest([1, 0, 0, 0]);

// Input: seats = [1,0,0,0,1,0,1]
// Output: 2
// Explanation: 
// If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
// If Alex sits in any other open seat, the closest person has distance 1.
// Thus, the maximum distance to the closest person is 2.


// Input: seats = [1,0,0,0]
// Output: 3
// Explanation: 
// If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
// This is the maximum distance possible, so the answer is 3.


// Input: seats = [0,1]
// Output: 1