let numbers = [13, 6, 3, 5, 76, 23, 3, 12, 45, 9, 29];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function findMax(arr) {
  if (arr.length === 0) {
    throw new Error("Empty array");
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let sum = sumArray(numbers);
let max = findMax(numbers);

console.log(sum);
console.log(max);
