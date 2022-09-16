const fs = require("fs");
const readlineSync = require("readline-sync");

let fileName = readlineSync.question("Give file name: ");
fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.log(`file ${fileName} does not exist`);
  }
  try {
    var obj = JSON.parse(data);
    if ("name" in obj == true) {
      console.log("Content of the file is:");
      console.log(obj.name);
    } else {
      console.log(`file ${fileName} contains json but not property name`);
    }
  } catch (err) {
    console.log(`file ${fileName} does not contain json`);
  }
});
