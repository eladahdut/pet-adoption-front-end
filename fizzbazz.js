// function missing(numbers) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     if (numbers[i + 1] - numbers[i] >= 2) return numbers[i] + 1;
//   }
//   return -1;
// }

function oddEevens(numbers) {
  const flag = numbers[0] % 2;
  for (let i = 1; i < numbers.length; i++) {
    if (!(numbers[i] % 2 === flag)) return false;
  }
  return true;
}

console.log(oddEevens([2]));
/**
 * numbers = [2, 4, 6, 12, 24]
 * true
 * numbers = [1, 9, 13, 135, 3]
 * true
 *
 * numbers = [1, 2]
 * false
 */
