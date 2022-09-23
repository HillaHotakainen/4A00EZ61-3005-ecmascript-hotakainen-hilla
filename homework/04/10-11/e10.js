function doIt(a, b) {
  console.log(this);
}
let object = { key: "value" };
doIt.call(object, 5, 5); //first argument is this but it's defined as object from the upper let object = { key: "value" };
