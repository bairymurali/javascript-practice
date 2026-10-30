
/**
 * JavaScript Day 03 - Challenge 2
 * Topic: Array map() Method
 *
 * Objective:
 * Calculate the annual salary, annual bonus, and total
 * annual compensation for each employee.
 *
 * Tasks:
 * 1. Calculate annual salary from monthly salary.
 * 2. Calculate a 10% bonus on the annual salary.
 * 3. Calculate total annual compensation.
 * 4. Create a new array containing the calculated values.
 * 5. Display the transformed employee records.
 *
 * Concepts:
 * - Array.map()
 * - Arrow functions
 * - Object creation
 * - Object property shorthand
 * - Arithmetic operators
 * - Printing arrays of objects
 */

// --------------------------------------------------
// Step 1: Define the employee data
// --------------------------------------------------

// Each employee has an ID, name, department,
// and monthly salary.

const employees = [
    { id: 101, name: 'Rahul', department: 'IT', salary: 50000 },
    { id: 102, name: 'Priya', department: 'HR', salary: 60000 },
    { id: 103, name: 'Amit', department: 'Finance', salary: 70000 },
    { id: 104, name: 'Sneha', department: 'IT', salary: 80000 },
    { id: 105, name: 'Arjun', department: 'Sales', salary: 55000 }
];

// --------------------------------------------------
// Step 2: Transform employee records using map()
// --------------------------------------------------

// The map() method processes every employee and
// returns a new array containing transformed objects.
//
// The original employees array remains unchanged.

const employeeAnnualSalaries = employees.map((employee) => {

    // Calculate annual salary (12 months).
    const annualSalary = employee.salary * 12;

    // Calculate a 10% bonus on the annual salary.
    const bonus = annualSalary * 10 / 100;

    // Calculate total annual compensation.
    const totalAnnualCompensation = annualSalary + bonus;

    // Return a new object with employee details
    // and the calculated compensation values.
    //
    // Property shorthand is used when the property
    // name matches the variable name.
    //
    // Example:
    // annualSalary is equivalent to annualSalary: annualSalary

    return {
        id: employee.id,
        name: employee.name,
        monthlySalary: employee.salary,
        annualSalary,
        bonus,
        totalAnnualCompensation
    };
});

// --------------------------------------------------
// Step 3: Display the transformed employee records
// --------------------------------------------------

// Pass the array as a separate console.log() argument
// to preserve its structure in the console.

console.log('Employee Annual Salary Details:', employeeAnnualSalaries);
