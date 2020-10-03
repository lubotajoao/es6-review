/**
 * Exercise One
 */

// const paintings = [
//   { name: "Mona Lisa", width: 200, height: 200 },
//   { name: "The scream", width: 400, height: 600 },
//   { name: "The last  supper", width: 600, height: 700 },
// ];

// const messages = paintings.map(function (painting) {
//   return `The ${painting.name} is ${painting.width} X ${painting.height}`;
// });

// console.log(messages);

/**
 * Exercise Tow
 */

const cars = [
  { name: "Ford", price: 200 },
  { name: "Nissan", price: 500 },
  { name: "Toyota", price: 600 },
];

//  Ford is 40000 rupies

const price = cars.map(function (car) {
  return `${car.name} is ${car.price * 200} rupies`;
});

console.log(price);
