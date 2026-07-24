let text: string = "hello";
let count: { [key: string]: number } = {};

for (let ch of text) {
    if (count[ch]) {
        count[ch]++;
    } else {
        count[ch] = 1;
    }
}

console.log(count);