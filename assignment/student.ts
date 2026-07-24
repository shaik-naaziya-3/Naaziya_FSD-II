class Student {
    name: string;
    rollNo: number;

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
    }
}

let student = new Student("Naaziya", 101);

student.displayDetails();