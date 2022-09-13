const fs = require("fs");
const file = process.argv.slice(2);
let origFile = file[0];
let copyFile = file[1];

function copy(origFile, copyFile) {
  fs.readFile(origFile, "utf-8", (err, data) => {
    if (err) {
      console.log("ERROR");
    }
    fs.writeFile(copyFile, data, (err) => {
      if (err) {
        console.log("ERROR");
      }
      console.log("SUCCESS");
    });
  });
}
let result = copy(origFile, copyFile);
console.log(result);
