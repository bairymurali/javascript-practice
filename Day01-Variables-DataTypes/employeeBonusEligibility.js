/**
 * 
 * Business requirement

A company provides a performance bonus when an employee meets both conditions:
- Performance rating is at least 4.
- Years of experience are at least 3.
Your tasks:
1. Declare employeeName = 'Arjun'.
2. Declare performanceRating = 4.
3. Declare yearsOfExperience = 5.
4. Declare minimumRating = 4.
5. Declare minimumExperience = 3.
6. Calculate isEligibleForBonus using comparison and logical operators.
7. Print the employee's details and bonus eligibility.
8. Demonstrate the difference between == and === by comparing performanceRating with the string '4'.

Expected output:

Employee Name: Arjun
Performance Rating: 4
Years of Experience: 5
Eligible for Bonus: true
Loose Equality: true
Strict Equality: false
 */



const employeeName = 'Arjun';
const performanceRating = 4;
const yearsOfExperience = 5;
const minimumRating = 4;
const minimumExperience = 3;

const isEligibleForBonus = (performanceRating >= minimumRating) && (yearsOfExperience >= minimumExperience);

console.log(`Employee Name: ${employeeName}`);
console.log(`Performance Rating: ${performanceRating}`);
console.log(`Years of Experience: ${yearsOfExperience}`);
console.log(`Eligible for Bonus: ${isEligibleForBonus}`);

const looseEquality = (performanceRating == '4');
const strictEquality = (performanceRating === '4');

console.log(`Loose Equality: ${looseEquality}`);
console.log(`Strict Equality: ${strictEquality}`);