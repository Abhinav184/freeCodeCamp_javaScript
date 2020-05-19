

/* =============== First Solution =============== */

function rangeOfNumbers(startNum, endNum) {
  let numbersInRange = [];
  if (startNum > endNum) return [];
  numbersInRange = rangeOfNumbers(startNum, endNum - 1);
  numbersInRange.push(endNum);
  return numbersInRange;
};
