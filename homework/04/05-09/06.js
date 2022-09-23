function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  console.log(this instanceof Person); //with petteri gives true, with obj gives false
}

let petteri = new Person("Petteri", "Rööri");
var obj = Person("jack", "smith"); // This returns undefined
console.log(fname); //This gives jack.
// console.log(obj.lname, obj.fname); This gives error.
console.log(petteri.lname, petteri.fname);
console.log(obj); //This gives undefined.
