var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
// aynchronous await
// async function main() {
//   let result = await prompt.get([
//     { name: "name", description: "please input your name" },
//     {
//       name: "age",
//       description: "please input your age",
//       pattern: /^\d+$/,
//       message: "please input a number",
//     },
//   ]);

//   console.log(result);
// }

// main();

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

// let setTimeoutPromise = (num) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(console.log(num)), 1000);
//   });

// async function main() {
//   for (let i = 0; i < 10; i++) {
//     await setTimeoutPromise(i);
//   }
// }

// async function add() {
//     return 123
// }

// main();

async function main() {
  let result = await prompt.get([
    { name: "numArr", description: "please input your numbers" },
  ]);
  let { numArr } = result;
  let ans = numArr.split(",").reduce((acc, cur) => {
    return acc + parseInt(cur);
  }, 0);
  console.log(ans);
}

// main();
let student = {
  name: "Student",
  description: "i am a student",
  girlfriend: { name: "ff", isExist: false },
};

let { name, description, girlfriend } = student;
let { isExist } = girlfriend;
console.log(name);
console.log(description);
console.log(girlfriend);
console.log(isExist);
