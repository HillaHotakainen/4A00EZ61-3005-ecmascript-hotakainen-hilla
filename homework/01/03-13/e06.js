let z = 1;
const y = 1;

function varri() {
  if (1 < 2) {
    var x = 3;
  }
  console.log(x, "var is global, that's why it's visible here");
}

function letti() {
  if (2 > 1) {
    let z = 2;
  }
  console.log(
    z,
    "let is not visible outside of if loop, previous value (ouside of function) is shown"
  );
}

//y = 3; You can not change const, running this line would trow error.

varri();
letti();
