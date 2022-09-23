function doIt(a, b) {
  console.log(this);
  console.log(a + b);
}
let object = { key: "value" };
doIt.apply(object, [5, 6]); //arguments after this can be given as an array
