
/**
 * JavaScript Day 03 - Challenge 4
 * Topic: Array find() Method
 *
 * Objective:
 * Search employee records using different conditions.
 *
 * Tasks:
 * 1. Find an employee by ID.
 * 2. Find an employee by name.
 * 3. Find the first employee from the IT department.
 * 4. Find an employee earning more than 90000.
 * 5. Handle cases where no matching employee exists.
 *
 * Concepts:
 * - Array.find()
 * - Arrow functions
 * - Comparison operators
 * - Conditional statements
 * - Handling undefined
 */

// --------------------------------------------------
// Step 1: Define employee data
// --------------------------------------------------

const employees = [
    { id: 101, name: 'Rahul', department: 'IT', salary: 50000 },
    { id: 102, name: 'Priya', department: 'HR', salary: 60000 },
    { id: 103, name: 'Amit', department: 'Finance', salary: 70000 },
    { id: 104, name: 'Sneha', department: 'IT', salary: 80000 },
    { id: 105, name: 'Arjun', department: 'Sales', salary: 65000 }
];

// --------------------------------------------------
// Step 2: Find employee by ID
// --------------------------------------------------

// Search for the first employee whose ID is 103.

const employeeById = employees.find((employee) => {
    return employee.id === 103;
});

// --------------------------------------------------
// Step 3: Find employee by name
// --------------------------------------------------

// Search for the employee named Sneha.

const employeeByName = employees.find((employee) => {
    return employee.name === 'Sneha';
});

// --------------------------------------------------
// Step 4: Find the first IT department employee
// --------------------------------------------------

// find() returns only the first matching employee.
// Rahul appears before Sneha in the employees array.

const firstITEmployee = employees.find((employee) => {
    return employee.department === 'IT';
});

// --------------------------------------------------
// Step 5: Find an employee earning more than 90000
// --------------------------------------------------

// If no employee satisfies the condition,
// find() returns undefined.

const highPaidEmployee = employees.find((employee) => {
    return employee.salary > 90000;
});

// --------------------------------------------------
// Step 6: Display employee search results
// --------------------------------------------------

console.log('Employee by ID:', employeeById);
console.log('Employee by Name:', employeeByName);
console.log('First IT Employee:', firstITEmployee);

// Check whether a matching high-paid employee exists.

if (highPaidEmployee === undefined) {
    console.log('No employee is earning more than 90000');
} else {
    console.log('High Paid Employee:', highPaidEmployee);
}

/**
 * Key Learning:
 *
 * find():
 * - Returns the first element satisfying a condition.
 * - Returns the original matching element.
 * - Returns undefined if no match is found.
 * - Does not modify the original array.
 *
 * Important:
 * The callback's return value is used to determine
 * whether an element matches.
 *
 * A truthy value means a match was found.
 * A falsy value means the search should continue.
 */

// Evaluation

const numbers = [10, 20, 30];

const result = numbers.find((number) => {
    if (number > 15) {
        return 'Matched';
    }
});

console.log('final result: ', result);

// filter returns 20, 30