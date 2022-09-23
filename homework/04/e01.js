function doIt() {
  let x = "hello world";
  function hello() {
    console.log(x);
  }
  return hello;
}

let f = doIt();
f();
