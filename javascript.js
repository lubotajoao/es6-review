/**
 * Every & Some
 */

// Every

const students = [
  { name: "Joao", grade: 4 },
  { name: "Pedro", grade: 6 },
  { name: "Manuel", grade: 2 },
];

// let allStudentsPassedTheCourse = false;

// for (let i = 0; i < students.length; i++) {
//   let student = students[i];

//   if (student.grade < 6) {
//     allStudentsPassedTheCourse = false;
//     break;
//   } else {
//     allStudentsPassedTheCourse = true;
//   }
// }

// console.log(allStudentsPassedTheCourse);

// let allStudentsPassedTheCourse = students.every(function (student) {
//   return student.grade >= 6;
// });

// console.log(allStudentsPassedTheCourse);

// Some

// let allStudentsPassedTheCourse = true;

// for (let i = 0; i < students.length; i++) {
//   let student = students[i];

//   if (student.grade >= 6) {
//     allStudentsPassedTheCourse = true;
//     break;
//   } else {
//     allStudentsPassedTheCourse = false;
//   }
// }

// console.log(allStudentsPassedTheCourse);

let allStudentsPassedTheCourse = students.some(function (student) {
  return student.grade >= 6;
});

console.log(allStudentsPassedTheCourse);
