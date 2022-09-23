function Person(fname, lname) {
  if (this instanceof Person) {
    this.fname = fname;
    this.lname = lname;
  } else {
    throw new TypeError("Cannot call a class as a function");
  }
}

let petteri = new Person("Petteri", "Rööri");
//var obj = Person("jack", "smith");
console.log(petteri.lname, petteri.fname);
//console.log(obj);
