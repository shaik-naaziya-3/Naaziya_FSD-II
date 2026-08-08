import { DELIVERY_CHARGE, DISCOUNT_RATE } from "./Constants";
import { Customer } from "./Customer";

export class Order {

    constructor(
        public customer: Customer,
        private orderAmount: number,
        public orderId: number
    ) {}

    public calculateFinalAmount(): number {

        const discount = this.orderAmount * DISCOUNT_RATE;

        return this.orderAmount - discount + DELIVERY_CHARGE;
    }

    public printOrder(): void {

        console.log("----- Online Order Confirmed -----");
        console.log(`Customer: ${this.customer.name}`);
        console.log(`Age: ${this.customer.age}`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Final Amount: ₹${this.calculateFinalAmount()}`);
        console.log("----------------------------------");
    }
}