/* Challenge Link:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups
*/

/* =============== First Solution =============== */

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

  var lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank'
  }

  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
