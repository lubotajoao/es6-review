var purchases = [
  { quantity: 2, amount: 100 },
  { quantity: 5, amount: 100 },
  { quantity: 10, amount: 100 },
];

var total = 0;

// for (var i = 0; i < purchases.length; i++) {
//   total += purchases[i].quantity * purchases[i].amount;
// }

purchases.forEach(function (item) {
  total += item.quantity * item.amount;
});

console.log(total);
