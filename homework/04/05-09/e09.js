function Person(fname, lname) {
  if (this instanceof Person) {
    this.fname = fname;
    this.lname = lname;
  } else {
    let newGuy = { fname: fname, lname: lname };
    return newGuy;
  }
}

let kari = new Person("Kari", "Grandi");
var obj = Person("jack", "smith");
console.log(kari.lname);
console.log(obj.fname);
