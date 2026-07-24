let numbers: number[] = [15, 40, 25, 60, 50];

let largest: number = 0;
let secondLargest: number = 0;

for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Second Largest =", secondLargest);