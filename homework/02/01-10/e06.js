const isPositiveInteger = (value, onSuccess, onError) =>
  value > 0 ? onSuccess(value) : onError.call();

isPositiveInteger(
  6,
  (value) => {
    console.log(value);
  },
  () => {
    console.log("not a positive number :c");
  }
);
