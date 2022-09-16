function makeCalculation(first, second) {
  function asynFunc(resolve, reject) {
    if (second == 0) {
      reject("Cannot divide with zero.");
    } else {
      setTimeout(() => {
        console.log("calculating stuff");
        let division = first / second;
        resolve(division);
      }, 1000);
    }
  }
  const p = new Promise(asynFunc);
  return p;
}

function sendStuffToBackend(result) {
  const random = Math.floor(Math.random() * 2);
  function asynFunc(resolve, reject) {
    if (random == 1) {
      setTimeout(() => {
        console.log(`sending to backend ${result}`);
        resolve("done");
      }, 1000);
    } else {
      reject("failed to connect to backend.");
    }
  }
  const p = new Promise(asynFunc);
  return p;
}

makeCalculation(10, 2)
  .then((division) => sendStuffToBackend(division))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));
