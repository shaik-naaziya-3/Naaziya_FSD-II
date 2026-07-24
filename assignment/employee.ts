class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Salary: ₹" + this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Name:", this.name);
        console.log("Department:", this.department);
    }
}

let emp = new Employee("Naaziya", 50000, "AI");

emp.displayDetails();

console.log("----------------");

let manager = new Manager("Harika", 75000, "Cyber Security");

manager.showDepartment();