function repeat(string, times = 1) {
  var times = times + 1; //array.join puts the argument between the array elements, that's why +1 here
  return Array(times).join(string);
}

console.log(repeat("moi")); // outputs "moi"
console.log(repeat("moi", 4)); // outputs "moimoimoimoi"
