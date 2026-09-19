class Course {
    title: string;
    fee: number;

    // Constructor Overloading
    constructor(title: string);
    constructor(title: string, fee: number);

    // Constructor Implementation
    constructor(title: string, fee?: number) {
        this.title = title;
        this.fee = fee ?? 999; // Default fee is 999
    }

    // Method
    displayDetails(): void {
        console.log("Course:", this.title);
        console.log("Fee: ₹" + this.fee);
    }

    // Method
    enrollStudent(): void {
        console.log("Enrollment Successful!");
    }
}

// Creating Objects
let course1 = new Course("TypeScript");
let course2 = new Course("Machine Learning", 4999);

// Calling Methods
course1.displayDetails();
course1.enrollStudent();

console.log("--------------------");

course2.displayDetails();
course2.enrollStudent();