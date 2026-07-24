let text: string = "programming";
let result: string = "";

for (let ch of text) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log("Result =", result);