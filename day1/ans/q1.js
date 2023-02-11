let star = "*";

for (let i = 0; i < 5; i++) {
  console.log(star);
  star += "*";
}

let students = ["dennis", "tom", "jerry"];

for (let i = 0; i < students.length; i++) {
  console.log(i);
  console.log(students[i]);
}

for (let student of students) {
  console.log(student);
  console.log(students.indexOf(student));
}

let pattern = "+-+-+-+";

let a = students.forEach((v, i, a) => {
  console.log(v);
  console.log(i);
  console.log(a);
});

let newStudents = students.map((v) => {
  console.log(v);
  return "dskjfdsfjksdfjksdfj";
});

console.log(a);
console.log(newStudents);
