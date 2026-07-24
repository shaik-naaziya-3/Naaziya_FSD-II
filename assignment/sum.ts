let num: number = 1234;
let sum: number = 0;
let temp: number = num;

while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
}

console.log("Sum of Digits =", sum);