function helper() {
  user.sayHello();
}
let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(helper, 1000);
  },
};
user.sayHello();
user.sayDelayedHello();
//works because helper inside of the sayDelayedHello is using object.function() call
//so this is object, it does not become global unlike with function() call
