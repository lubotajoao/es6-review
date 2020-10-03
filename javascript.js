const names = ["Joao", "Lubota", "Vida", "Costa", "Beamer"];
let template = "";

names.forEach(function (name) {
  template += `<div>Hi my name is ${name}</div>`;
});

document.body.insertAdjacentHTML("afterbegin", template);
