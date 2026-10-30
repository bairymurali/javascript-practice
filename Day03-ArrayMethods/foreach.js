/**
 * const numbers = [10, 20, 30];
numbers.forEach((number) => {
    console.log(number);
});
 */


/**
 * JavaScript Day 03 - Challenge 1
 * Topic: Array forEach() Method
 *
 * Business Requirement:
 * The HR department maintains employee records.
 * Display each employee's details and classify employees
 * based on their monthly salary.
 *
 * Objectives:
 * 1. Iterate through all employee records.
 * 2. Display employee ID, name, department, and salary.
 * 3. Classify employees based on their monthly salary.
 * 4. Display the salary classification for each employee.
 *
 * Classification Rules:
 * - Salary > 60000  : High Salary Employee
 * - Salary <= 60000 : Regular Salary Employee
 *
 * Concepts:
 * - Array.forEach()
 * - Arrow functions
 * - Accessing object properties
 * - Conditional statements (if-else)
 * - Comparison operators
 * - Template literals
 * - Console output formatting
 */

// --------------------------------------------------
// Step 1: Define the employee data
// --------------------------------------------------

// Each employee record contains an ID, name,
// department, and monthly salary.

const employees = [
    { id: 101, name: 'Rahul', department: 'IT', salary: 50000 },
    { id: 102, name: 'Priya', department: 'HR', salary: 60000 },
    { id: 103, name: 'Amit', department: 'Finance', salary: 70000 },
    { id: 104, name: 'Sneha', department: 'IT', salary: 80000 },
    { id: 105, name: 'Arjun', department: 'Sales', salary: 55000 }
];

// --------------------------------------------------
// Step 2: Iterate through employees using forEach()
// --------------------------------------------------

// The forEach() method executes the callback function
// once for every employee in the array.
//
// It is useful when we want to perform an action
// for each element without creating a new array.

employees.forEach((employee) => {

    // --------------------------------------------------
    // Step 3: Display the current employee's details
    // --------------------------------------------------

    // Template literals allow variables and expressions
    // to be embedded directly into strings using ${}.

    console.log(`Employee ID: ${employee.id}`);
    console.log(`Employee Name: ${employee.name}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Monthly Salary: ${employee.salary}`);

    // --------------------------------------------------
    // Step 4: Classify employees based on salary
    // --------------------------------------------------

    // Employees earning more than 60000 per month
    // are classified as High Salary Employees.
    //
    // Employees earning 60000 or less per month
    // are classified as Regular Salary Employees.

    if (employee.salary > 60000) {
        console.log(`Salary Classification: High Salary Employee`);
    } else {
        console.log(`Salary Classification: Regular Salary Employee`);
    }

    // --------------------------------------------------
    // Step 5: Separate employee records in the output
    // --------------------------------------------------

    // Print a separator for better readability.

    console.log('----------------------------------------');
});

/**
 * Key Learning:
 *
 * forEach():
 * - Executes a callback for every array element.
 * - Is mainly used for iteration and side effects,
 *   such as printing information.
 * - Returns undefined.
 * - Does not create a new array.
 *
 * map():
 * - Executes a callback for every array element.
 * - Returns a new array containing callback results.
 * - Is mainly used to transform data.
 *
 * Both methods leave the original array unchanged
 * unless the callback explicitly mutates its contents.
 */
