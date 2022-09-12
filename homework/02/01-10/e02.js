function Person(name, age) {
  this.name = name;
  this.age = age;
}

let tina = new Person("Tina", 20);

for (let x in tina) {
  console.log(tina[x]);
}
