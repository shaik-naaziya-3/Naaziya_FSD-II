export interface Customer {
    name: string;
    age: number;
    membership?: "Regular" | "Premium" | "Gold";
}