const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);
const readlineSync = require("readline-sync");

let fileName = readlineSync.question("Give file name: ");

function parseJson(data) {
  function func(resolve, reject) {
    var obj = JSON.parse(data);
    if ("name" in obj == true) {
      content = `Content of the file is: ${obj.name}`;
      resolve(content);
    } else {
      reject("property name not found");
    }
  }
  const p = new Promise(func);
  return p;
}

readFile(fileName, "utf-8")
  .then((data) => parseJson(data))
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
