/**
 * Using For Loop
 */

// var numbers = [1, 2, 3, 4, 5, 6];
// var otherArray = [];

// for (let i = 0; i < numbers.length; i++) {
//   otherArray.push(numbers[i] * 10);
// }

// console.log(otherArray);

/**
 * Using Map Loop
 */

const numbers = [1, 2, 3, 4, 5, 6];

const otherArray = numbers.map(function (number) {
  return number * 10;
});

console.log(otherArray);
