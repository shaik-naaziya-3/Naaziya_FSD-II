// Traditional Named Function
function findTotal(price: number, quantity: number): number {
    return price * quantity;
}


// Arrow Function
const addTax = (total: number, tax: number): number => {
    return total + tax;
};


// Shorthand Arrow Function
const getStatus = (amount: number): string =>
    amount >= 100 ? "Premium Order" : "Regular Order";


// Function Calls
let total = findTotal(25, 4);
let finalAmount = addTax(total, 10);
let typeoforder = getStatus(finalAmount);


// Output
console.log(`Total:${total}`);
console.log(`FinalAmount:${finalAmount}`);
console.log(`TypeofOrder:${typeoforder}`);