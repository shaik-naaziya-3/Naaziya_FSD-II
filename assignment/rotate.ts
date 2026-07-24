let numbers: number[] = [1, 2, 3, 4, 5];
let n: number = 2;

let rotated = numbers.slice(n).concat(numbers.slice(0, n));

console.log("Rotated Array =", rotated);