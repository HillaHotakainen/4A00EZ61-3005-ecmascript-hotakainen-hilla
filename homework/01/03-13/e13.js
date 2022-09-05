function abs(number) {
  if (number < 0) {
    let newnro = number * -1;
    return newnro;
  } else {
    return number;
  }
}

console.log(abs(-7));
console.log(abs(7));
