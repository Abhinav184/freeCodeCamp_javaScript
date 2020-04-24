/* Challenge Link:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions
*/

/* =============== First Solution =============== */

function myLocalScope() {
  'use strict';

  // Only change code below this line
  var myVar;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log(myVar);

// Now remove the console log line to pass the test
