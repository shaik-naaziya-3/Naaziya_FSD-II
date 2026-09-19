// Generic class
// T can represent different data types

class StorageBox<T> {

    private item: T;

    constructor(initialItem: T) {
        this.item = initialItem;
    }

    // Get the stored item
    public getItem(): T {
        console.log("Accessing storage box...");
        return this.item;
    }

    // Update the stored item
    public updateItem(newItem: T): void {
        this.item = newItem;
        console.log("Storage box updated successfully.");
    }
}


// ------------------------------------
// 1. Generic with Number
// ------------------------------------

const numberBox = new StorageBox<number>(2500);

const amount = numberBox.getItem();

console.log(`Stored Amount: ₹${amount}`);


// ------------------------------------
// 2. Generic with String
// ------------------------------------

const textBox = new StorageBox<string>("College Certificate");

const documentName = textBox.getItem();

console.log(`Stored Document: ${documentName}`);


// ------------------------------------
// 3. Generic with Custom Object
// ------------------------------------

interface Product {
    productName: string;
    price: number;
}

const productBox = new StorageBox<Product>({
    productName: "Wireless Headphones",
    price: 1800
});

const product = productBox.getItem();

console.log(`Product: ${product.productName}`);
console.log(`Price: ₹${product.price}`);


// ------------------------------------
// Updating the product
// ------------------------------------

productBox.updateItem({
    productName: "Smart Watch",
    price: 2500
});

const updatedProduct = productBox.getItem();

console.log(`Updated Product: ${updatedProduct.productName}`);
console.log(`Updated Price: ₹${updatedProduct.price}`);


// ------------------------------------
// ERROR DEMO
// ------------------------------------

// This will produce a TypeScript error
// because numberBox accepts only numbers.

// numberBox.updateItem("Laptop");