let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

//setTimeout(user.sayHello, 1000); //this becomes global because it's calling function() instead of object.function(), so instead of jack we get undefined
// if called like setTimeout(user.sayHello(), 1000) it crashes since it needs function(),
// user.sayHello() turns into undefined before it can be used as function() inside of setTimeout.

//function sayHello() {
//  user.sayHello();
//}

//setTimeout(sayHello, 1000); //works because the helper function sayHello() has object.function call, so this is object, not global.

setTimeout(() => user.sayHello(), 1000);

user.sayHello = function () {
  console.log(
    "user.sayHello is defined now as a function that prints string, shit breaks"
  );
};
