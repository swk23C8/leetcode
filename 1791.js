/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
   //brute force
   for (let i = 0; i < edges.length; i++) {
      if (edges[i][0] === edges[i][1]) {
         return edges[i][0];
      }
      else if (edges[i][0] !== edges[i][1]) {
         for (let j = i+1; j < edges.length; j++) {
            if (edges[i][0] === edges[j][0] || edges[i][0] === edges[j][1]) {
               return edges[i][0];
            }
            else if (edges[i][1] === edges[j][0] || edges[i][1] === edges[j][1]) {
               return edges[i][1];
            }
         }
      }
   }
};


// There is an undirected star graph consisting of n nodes labeled from 1 to n.
// A star graph is a graph where there is one center node and exactly n - 1
// edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi]
// indicates that there is an edge between the nodes ui and vi.
// Return the center of the given star graph.


// Input: edges = [[1,2],[2,3],[4,2]]
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.