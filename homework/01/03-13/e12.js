let readlineSync = require("readline-sync");

let word = readlineSync.question("Give me a word: ");
let splittedArray = word.split("");
let reversed = splittedArray.reverse();
let reverseString = reversed.join("");

if (word == reverseString) {
  console.log("it was a palindrome :D");
} else {
  console.log("it was not a palindrome :c");
}
