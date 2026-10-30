
/**
 * JavaScript Day 03 - Challenge 3
 * Topic: Array filter() Method
 *
 * Objective:
 * Filter employee records based on salary and department.
 *
 * Tasks:
 * 1. Find employees eligible for a salary review.
 * 2. Find employees earning more than ₹60,000 per month.
 * 3. Find all employees working in the IT department.
 *
 * Concepts:
 * - Array.filter()
 * - Arrow functions
 * - Comparison operators (>, ===)
 * - Logical AND operator (&&)
 * - Printing arrays of objects
 */

// --------------------------------------------------
// Step 1: Define the employee data
// --------------------------------------------------

const employees = [
    { id: 101, name: 'Rahul', department: 'IT', salary: 50000 },
    { id: 102, name: 'Priya', department: 'HR', salary: 60000 },
    { id: 103, name: 'Amit', department: 'Finance', salary: 70000 },
    { id: 104, name: 'Sneha', department: 'IT', salary: 80000 },
    { id: 105, name: 'Arjun', department: 'Sales', salary: 55000 }
];

// --------------------------------------------------
// Step 2: Filter employees eligible for salary review
// --------------------------------------------------

// An employee is eligible if:
// 1. They belong to the IT department.
// 2. Their monthly salary is greater than ₹60,000.
//
// Both conditions must be true (&&).

const eligibleEmployees = employees.filter((employee) => {
    return employee.department === 'IT' && employee.salary > 60000;
});

// --------------------------------------------------
// Step 3: Filter employees earning more than ₹60,000
// --------------------------------------------------

// Return all employees whose monthly salary exceeds ₹60,000,
// regardless of their department.

const highSalaryEmployees = employees.filter((employee) => {
    return employee.salary > 60000;
});

// --------------------------------------------------
// Step 4: Filter employees from the IT department
// --------------------------------------------------

// Return all employees working in the IT department,
// regardless of their monthly salary.

const itEmployees = employees.filter((employee) => {
    return employee.department === 'IT';
});

// --------------------------------------------------
// Step 5: Display the filtered employee records
// --------------------------------------------------

// Pass arrays as separate console.log() arguments.
// This preserves their structure instead of converting
// objects into strings like "[object Object]".

console.log('Eligible Employees:', eligibleEmployees);
console.log('High Salary Employees:', highSalaryEmployees);
console.log('IT Department Employees:', itEmployees);
