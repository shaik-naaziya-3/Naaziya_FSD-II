let numbers: number[] = [1, 2, 3, 5];
let n: number = 5;
let sum: number = 0;

for (let num of numbers) {
    sum += num;
}

let total = (n * (n + 1)) / 2;
let missing = total - sum;

console.log("Missing Number =", missing);