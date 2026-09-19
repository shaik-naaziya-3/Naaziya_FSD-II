// Variable Annotations
let studentName: string = "Naaziya";
let studentAge: number = 20;
let isPresent: boolean = true;

// Array Annotation
let subjectMarks: number[] = [95, 90, 98];

// Function Parameter and Return Type Annotations
function calculateTotal(mark1: number, mark2: number): number {
    return mark1 + mark2;
}

// Using annotated variables and function
let totalMarks: number = calculateTotal(95, 90);

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Present:", isPresent);
console.log("Marks:", subjectMarks);
console.log("Total Marks:", totalMarks);