/**
 * Find
 */

// Example: #01
// const brands = [
//   { name: "Apple", id: 1 },
//   { name: "HP", id: 2 },
//   { name: "Samsung", id: 3 },
//   { name: "Samsung", id: 4 },
// ];

// const result = brands.find(function (brand) {
//   return brand.name === "Samsung";
// });

// console.log(result);

// Example: #02
const cars = [
  { brand: "Ford", price: 500, available: 2, type: "Sport Car" },
  { brand: "Nissa", price: 200, available: 5, type: "Wagon" },
  { brand: "Chevy", price: 300, available: 4, type: "Sport Car" },
  { brand: "Porshe", price: 100, available: 1, type: "Urban" },
];

function getResoults() {
  return cars.find(function (car) {
    return car.price < price && car.available > 0 && car.type === type;
  });
}

document.querySelector(".search").addEventListener("click", function () {
  let price = parseIn(document.querySelector("#price").value);
  let type = document.querySelector("#type").value;
  let results = getResoults(price, type);

  if (results) {
    console.log(`Found ${result.brand} fir $ ${results.price}`);
  } else {
    console.log(`Sorry, no car for you`);
  }
});
