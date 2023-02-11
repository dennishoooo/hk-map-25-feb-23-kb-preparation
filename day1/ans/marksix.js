function checkMarkSix(prize, guesses) {
  for (let guess of guesses) {
    if (!prize.includes(guess)) {
      return false;
    }
  }
  return true;
}
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3])); // returns: true
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3])); // returns: false
console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19])); // returns: true

function randomPick() {
  let guesses = [];
  while (guesses.length < 2) {
    let guess = Math.floor(Math.random() * 12) + 1;
    if (!guesses.includes(guess)) {
      guesses.push(guess);
    }
  }
  return guesses;
}

function quickPicks(prize, numberOfGuesses) {
  let attempts = [];
  for (let i = 0; i < numberOfGuesses; i++) {
    let bid = randomPick();
    let win = checkMarkSix(prize, bid);
    attempts.push({ bid, win });
  }
  return attempts;
}

console.log(quickPicks([1, 3, 5, 7, 9, 11], 1)); // returns: [{"bid": [1, 3], "win": true}]
console.log(quickPicks([1, 3, 5, 7, 9, 11], 100)); // returns: [{"bid": [2, 4], "win": false}, {"bid": [2, 5], "win": false}, {"bid": [7, 9], "win": true}]

const prize = [1, 3, 5, 7, 9, 11];
const picks = quickPicks(prize, 100);
let idx = 0;
console.log("The mark six result: ", prize);

let timer = setInterval(() => {
  if (idx === picks.length) {
    clearInterval(timer);
  }
  console.log("Your quick pick:", picks[idx].bid);
  console.log(picks[idx].win ? "WIN" : "LOSE");
  idx++;
}, 1000);
