// Namespace for grouping student verification functions

namespace StudentVerification {

    // Private constant
    const studentIdLength: number = 8;

    // Function to validate Student ID
    export function validateStudentId(id: string): boolean {

        const idPattern = /^\d+$/;

        return idPattern.test(id) && id.length === studentIdLength;
    }

    // Function to validate college email
    export function validateCollegeEmail(email: string): boolean {

        const emailPattern = /^[A-Za-z0-9._%+-]+@college\.edu$/;

        return emailPattern.test(email);
    }

    // Nested namespace
    export namespace Scholarship {

        export function calculateAmount(score: number): number {

            if (score >= 90) {
                return 10000;
            }
            else if (score >= 75) {
                return 5000;
            }
            else {
                return 0;
            }
        }
    }
}


// -------- Using the Namespace --------

const studentId: string = "20241234";
const collegeEmail: string = "naaziya@college.edu";
const studentScore: number = 88;


// Student ID verification
if (StudentVerification.validateStudentId(studentId)) {
    console.log("Student ID is valid");
}
else {
    console.log("Invalid Student ID");
}


// College email verification
if (StudentVerification.validateCollegeEmail(collegeEmail)) {
    console.log("College Email is valid");
}
else {
    console.log("Invalid College Email");
}


// Using nested namespace
const scholarship =
    StudentVerification.Scholarship.calculateAmount(studentScore);

console.log(`Scholarship Amount: ₹${scholarship}`);