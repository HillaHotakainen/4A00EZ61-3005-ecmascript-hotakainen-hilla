function outer() {
  let a = 5;
  function inner(b) {
    answer = console.log(a + b);
    return answer;
  }
  inner(5);
  inner(6);
  inner(7);
}
outer();
