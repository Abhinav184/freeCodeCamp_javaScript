/* Challenge Link:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
*/

/* =============== First Solution =============== */

function rangeOfNumbers(startNum, endNum) {
  let numbersInRange = [];
  if (startNum > endNum) return [];
  numbersInRange = rangeOfNumbers(startNum, endNum - 1);
  numbersInRange.push(endNum);
  return numbersInRange;
};
