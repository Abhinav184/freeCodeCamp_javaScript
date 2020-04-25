/* Challenge Link:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements
*/

/* =============== First Solution =============== */

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return 'Yes, that was true';
  }
  return 'No, that was false';
  // Only change code above this line
}

/* =============== Second Solution =============== */

function trueOrFalse(wasThatTrue) {
  return wasThatTrue ? 'Yes, that was true' : 'No, that was false';
}
