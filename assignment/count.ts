let numbers: number[] = [1, 2, 2, 3, 1, 4];

let count: { [key: number]: number } = {};

for (let num of numbers) {
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}

console.log(count);