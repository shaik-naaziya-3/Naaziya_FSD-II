import { Order } from "./OrderLogic";
import { Customer } from "./Customer";

const buyer: Customer = {
    name: "Naaziya",
    age: 20,
    membership: "Premium"
};

const myOrder = new Order(buyer, 2500, 5087);

myOrder.printOrder();