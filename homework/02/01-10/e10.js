function doIt() {
  let string = "";
  for (let i = 0; i < arguments.length; i++) {
    string += arguments[i];
  }
  console.log(string);
}

doIt("a"); // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc
