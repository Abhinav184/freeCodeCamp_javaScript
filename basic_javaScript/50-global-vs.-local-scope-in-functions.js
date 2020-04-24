/* Challenge Link:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs.-local-scope-in-functions
*/

/* =============== First Solution =============== */

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();
