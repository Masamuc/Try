function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum);

function substract(a, b) {
  return a - b;
}

let minus = substract(10, 5);
console.log(minus);

function multiply(a, b) {
  return a * b;
}

let zvezdica = multiply(5, 5);
console.log(zvezdica);

function divide(a, b) {
  if (b === 0) {
    throw new Error("No zero allowed");
  }
  return a / b;
}

let deljenje = divide(8, 2);
console.log(deljenje);
