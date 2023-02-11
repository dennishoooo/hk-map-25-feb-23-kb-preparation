var prompt = require("prompt");

async function main() {
  let total = 0;
  let ans = "";

  while (ans != "0") {
    let result = await prompt.get([
      { name: "number", description: "please input your number" },
    ]);
    console.log(result);
    total += parseInt(result.number);
    ans = result.number;
  }
  console.log(`the total is ${total}`);
}

main();
