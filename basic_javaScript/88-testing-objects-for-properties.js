/* Challenge Link:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/testing-objects-for-properties
*/

/* =============== First Solution =============== */

function checkObj(obj, checkProp) {
  // Only change code below this line

  if (obj.hasOwnProperty(checkProp)) return obj[checkProp];
  return 'Not Found';

  // Only change code above this line
}
