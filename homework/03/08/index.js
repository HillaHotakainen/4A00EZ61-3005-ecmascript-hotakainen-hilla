const readlineSync = require("readline-sync");
const fetch = require("node-fetch");

let idNumber = readlineSync.question("Give id: ");

async function fetchTitle() {
  function fetchInfo(idNumber) {
    function asynFunc(resolve, reject) {
      person = fetch(`https://swapi.dev/api/people/${idNumber}/`);
      resolve(person);
    }
    const p = new Promise(asynFunc);
    return p;
  }
  const info = await fetchInfo(idNumber);

  function parseJson(data) {
    function func(resolve, reject) {
      var obj = data.json();
      resolve(obj);
    }
    const p = new Promise(func);
    return p;
  }
  const dude = await parseJson(info);

  function getMovie(movie) {
    function funky(resolve, reject) {
      var temp = movie.films[0];
      var movieInfo = fetch(temp);
      resolve(movieInfo);
    }
    const p = new Promise(funky);
    return p;
  }
  const movie = await getMovie(dude);
  const jsMovie = await parseJson(movie);

  function movieName(nameInfo) {
    function func(resolve, reject) {
      var nameOfMovie = `First film title: ${nameInfo.title}`;
      resolve(nameOfMovie);
    }
    const p = new Promise(func);
    return p;
  }
  const result = await movieName(jsMovie);
  return result;
}

fetchTitle(idNumber).then((title) => console.log(title));
