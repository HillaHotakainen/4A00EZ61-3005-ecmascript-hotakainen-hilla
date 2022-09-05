let readlineSync = require("readline-sync");
var asciitable = require("asciitable");

let database = [];

function add(name) {
  let id = database.length;
  let newguy = { id: id, name: name };
  database.push(newguy);
}
function remove(id) {
  database.splice(id, 1);
  console.log(database);
}
function display() {
  var options = {
    skinny: true,
    intersectionCharacter: "o",
    columns: [
      { field: "id", name: "Student ID Number" },
      { field: "name", name: "Student Name" },
    ],
  };
  var table = asciitable(database, options);
  console.log(table);
}

function main() {
  var bool = true;
  while (bool == true) {
    console.log("[1] Add");
    console.log("[2] Remove");
    console.log("[3] Display");
    console.log("[0] Cancel");
    let choise = readlineSync.questionInt("Choise? [1, 2, 3, 0]: ");
    if (choise == 0) {
      bool = !bool;
    }
    if (choise == 1) {
      let name = readlineSync.question("May I have student name? ");
      add(name);
    }
    if (choise == 2) {
      let id = readlineSync.question("May I have id? ");
      remove(id);
    }
    if (choise == 3) {
      display();
    }
  }
}

main();
