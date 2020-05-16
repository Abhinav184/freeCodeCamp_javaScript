/* Challenge Link:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
*/

/* =============== First Solution =============== */

// Only change code below this line
function countdown(n){
  var countArr = [];
  if (n < 1) {
    return [];
  } else {
    countArr = countdown(n - 1);
    countArr.unshift(n);
    return countArr;
  }
}
// Only change code above this line
