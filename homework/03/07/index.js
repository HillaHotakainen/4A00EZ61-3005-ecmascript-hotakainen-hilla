const fs = require("fs");
const readlineSync = require("readline-sync");

let fileName = readlineSync.question("Give file name (ONLY JSON FILES): ");

async function readFileAndParse() {
  function readFile(fileName) {
    function asynFunc(resolve, reject) {
      fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
          reject("No such file found");
        } else {
          resolve(data);
        }
      });
    }
    const p = new Promise(asynFunc);
    return p;
  }

  const sos = await readFile(fileName);

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
  const result = await parseJson(sos);
  return result;
}

readFileAndParse(fileName)
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
