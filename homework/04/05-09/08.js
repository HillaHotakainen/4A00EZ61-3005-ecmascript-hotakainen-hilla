class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

let pete = new Person("Pete", "Puuha");
console.log(pete);

//In Babel it turns into this:

("use strict");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  //This throws TypeError
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = /*#__PURE__*/ _createClass(function Person(fname, lname) {
  _classCallCheck(this, Person);

  this.fname = fname;
  this.lname = lname;
});

var pete = new Person("Pete", "Puuha");
console.log(pete);
