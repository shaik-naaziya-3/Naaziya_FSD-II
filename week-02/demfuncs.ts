// Parameter Types and Return Type
function calculateTotal(m1: number, m2: number): number {
    return m1 + m2;
}


// Default Parameter
function greetStudent(studentName: string = "Harika"): string {
    return "Welcome, " + studentName + "!";
}


// Optional Parameter
function displayStudent(studentName: string, age?: number): string {
    if (age !== undefined) {
        return studentName + " is " + age + " years old.";
    }
    return studentName + "'s age is not provided.";
}


// Rest Parameter
function calculateAverage(...marks: number[]): number {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total / marks.length;
}


// Function Calls
let totalMarks: number = calculateTotal(90, 85);

let message1: string = greetStudent("Naaziya");
let message2: string = greetStudent();

let student1: string = displayStudent("Ayesha", 20);
let student2: string = displayStudent("sriram");

let averageMarks: number = calculateAverage(95, 90, 88, 92);


// Output
console.log("Total Marks:", totalMarks);
console.log(message1);
console.log(message2);
console.log(student1);
console.log(student2);
console.log("Average Marks:", averageMarks);