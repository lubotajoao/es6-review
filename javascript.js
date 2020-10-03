const users = [
  { user: "Martin Jones", age: 22, eyes: "brown" },
  { user: "Jane Doe", age: 20, eyes: "blue" },
  { user: "Martin Jones", age: 38, eyes: "lightgrey" },
  { user: "Jeremy Crown", age: 80, eyes: "lightgreen" },
];

const listOfUsers = users.map(function (user) {
  return user.user;
});

// console.log(listOfUsers);

listOfUsers.forEach(function (name) {
  const select = document.querySelector("select");

  select.insertAdjacentHTML(
    "afterbegin",
    `<option value="${name}">${name}</option>`
  );
});
