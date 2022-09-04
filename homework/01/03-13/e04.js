let readlineSync = require("readline-sync");

let name = readlineSync.question("Give me a name");
let ammount = readlineSync.questionInt("Give me a number");

console.log(name.repeat(ammount));
