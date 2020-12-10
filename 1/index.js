import { input } from "/puzzleInput.js";

console.log(input);

let inputArray = input.split("\n");
let answer;

for (let i = 0; i < inputArray.length; i++) {
  for (let j = 0; j < inputArray.length; j++) {
    if (Number(inputArray[i]) + Number(inputArray[j]) === 2020) {
      answer = inputArray[i] * inputArray[j];
      console.log(answer);
    }
  }
}
