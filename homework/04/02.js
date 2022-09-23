function doIt(bool) {
  return bool ? () => console.log("world") : () => console.log("hello");
}

doIt(false)(); // outputs hello
doIt(true)(); // outputs world
