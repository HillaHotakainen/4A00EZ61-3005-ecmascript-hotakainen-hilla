const isPositiveInteger = (value, onSuccess, onError) =>
  value > 0 ? onSuccess(value) : onError.call();

isPositiveInteger(
  6,
  function (value) {
    console.log(value);
  },
  function () {
    console.log("not a positive number :c");
  }
);
