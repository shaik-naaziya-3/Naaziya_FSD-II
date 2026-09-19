class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    // Constructor
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    // Public Method
    displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Salary: ₹" + this.salary);
        console.log("Department:", this.department);
    }
}

// Child class can access protected members
class Manager extends Employee {

    // Protected Member Testing
    showDepartment(): void {
        console.log("Name:", this.name);
        console.log("Department:", this.department);
    }
}


// ----- Execution -----

// Public and Private Member Testing
let employee = new Employee("Naaziya", 50000, "Data Analyst");
employee.displayDetails();

console.log("----------------");

// Protected Member Testing
let manager = new Manager("Harika", 75000, "Cyber");
manager.showDepartment();


// Uncommenting the lines below will give errors.

// employee.salary;      // Error: salary is private
// manager.department;  // Error: department is protected