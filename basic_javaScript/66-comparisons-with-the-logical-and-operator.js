/* Challenge Link:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator
*/

/* =============== First Solution =============== */

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return 'Yes';
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

/* =============== Second Solution (fails tests because no if statement is present) =============== */

function testLogicalAnd(val) {
  return (val >= 25 && val <= 50) ? 'Yes' : 'No';
}
