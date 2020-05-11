/* Challenge Link:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion
*/

/* =============== First Solution =============== */

function sum(arr, n) {
  // Only change code below this line

  if (n === 0) return 0;
  return sum(arr, n - 1) + arr[n - 1];

  // Only change code above this line
}

/* =============== Second Solution =============== */

function sum(arr, n) {
  return n === 0 ? 0 : sum(arr, n - 1) + arr[n - 1];
}
