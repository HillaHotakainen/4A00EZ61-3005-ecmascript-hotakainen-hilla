function isPositiveInteger(value, onSuccess, onError) {
  if (value > 0) {
    onSuccess(value);
  } else {
    onError();
  }
}

function onSuccess(value) {
  console.log(value);
}

function onError() {
  console.log("not a positive number :c");
}

isPositiveInteger(6, onSuccess, onError);
isPositiveInteger(-6, onSuccess, onError);
isPositiveInteger(0, onSuccess, onError);
