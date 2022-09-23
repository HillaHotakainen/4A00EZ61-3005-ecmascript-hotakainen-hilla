let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

let myfunc = user.sayHello;
myfunc();
//Hello, undefined!
//this is undefined because this of myfunc() is actually global
//if we want Hello, Jack! we must call function like:
// user.sayHello(); so that this becomes object.
