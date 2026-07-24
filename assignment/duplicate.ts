let numbers: number[] = [10, 20, 30, 20, 40, 10];

let duplicates: number[] = [];

for (let num of numbers) {
    if (numbers.indexOf(num) !== numbers.lastIndexOf(num)) {
        if (!duplicates.includes(num)) {
            duplicates.push(num);
        }
    }
}

console.log("Duplicate Elements =", duplicates);