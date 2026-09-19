namespace StudentVerification {

    // Private constant
    const studentIdLength: number = 8;

    // Validate Student ID
    export function validateStudentId(id: string): boolean {

        const idPattern = /^\d+$/;

        return idPattern.test(id) && id.length === studentIdLength;
    }

    // Validate college email
    export function validateCollegeEmail(email: string): boolean {

        const emailPattern = /^[A-Za-z0-9._%+-]+@college\.edu$/;

        return emailPattern.test(email);
    }

    // Nested Namespace
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