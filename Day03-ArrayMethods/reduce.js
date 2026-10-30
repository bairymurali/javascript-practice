
/**
 * JavaScript Day 03 - Challenge 5
 * Topic: Array reduce() Method
 *
 * Business Requirement:
 * The HR department wants to analyze employee salary
 * expenses and generate salary-related summaries.
 *
 * Objectives:
 * 1. Calculate the total monthly salary of all employees.
 * 2. Calculate the average monthly salary.
 * 3. Calculate the total salary paid to IT employees.
 * 4. Count employees earning more than 60000 per month.
 *
 * Concepts:
 * - Array.reduce()
 * - Arrow functions
 * - Accumulator and current element
 * - Initial accumulator value
 * - Conditional statements (if)
 * - Comparison operators (>, ===)
 * - Arithmetic operators
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
// Step 2: Calculate the total monthly salary
// --------------------------------------------------

// reduce() processes each employee and accumulates
// their monthly salary into a single total.
//
// Parameters:
// - total: Accumulator holding the running salary total.
// - employee: Current employee being processed.
//
// Initial accumulator value: 0
//
// For every employee, add their salary to the total.
// The returned value becomes the accumulator
// for the next iteration.

const totalMonthlySalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

// --------------------------------------------------
// Step 3: Calculate the average monthly salary
// --------------------------------------------------

// Average salary = Total salary / Number of employees.
//
// Reuse the totalMonthlySalary calculated in Step 2
// instead of executing reduce() again.
//
// Check that the array is not empty to avoid
// division by zero.

const averageMonthlySalary = employees.length > 0
    ? totalMonthlySalary / employees.length
    : 0;

// --------------------------------------------------
// Step 4: Calculate the total IT department salary
// --------------------------------------------------

// Use reduce() to calculate the combined monthly
// salary of employees belonging to the IT department.
//
// If the employee belongs to IT:
// - Add their salary to the accumulator.
//
// Otherwise:
// - Return the accumulator without modification.
//
// Important:
// Always return the accumulator from the callback,
// even when the condition is not satisfied.

const salaryTotalITDepartment = employees.reduce((total, employee) => {

    if (employee.department === 'IT') {
        return total + employee.salary;
    }

    return total;

}, 0);

// --------------------------------------------------
// Step 5: Count high-salary employees
// --------------------------------------------------

// Count employees earning more than 60000 per month.
//
// Here, the accumulator represents a count,
// not a salary total.
//
// If the employee earns more than 60000:
// - Increment the count by 1.
//
// Otherwise:
// - Return the existing count.

const highSalaryCount = employees.reduce((count, employee) => {

    if (employee.salary > 60000) {
        return count + 1;
    }

    return count;

}, 0);

// --------------------------------------------------
// Step 6: Display the salary analysis results
// --------------------------------------------------

console.log('Total Monthly Salary:', totalMonthlySalary);
console.log('Average Monthly Salary:', averageMonthlySalary);
console.log('IT Department Salary Total:', salaryTotalITDepartment);
console.log('High Salary Employee Count:', highSalaryCount);

/**
 * Key Learning:
 *
 * reduce():
 * - Processes array elements using an accumulator.
 * - Returns one final accumulated result.
 * - Can calculate totals, averages, counts, and summaries.
 * - Does not modify the original array by itself.
 *
 * Accumulator:
 * - Stores the result from previous iterations.
 * - Receives the callback's returned value.
 * - Can be a number, string, array, object, etc.
 *
 * Initial Value:
 * - In these examples, the initial value is 0.
 * - It ensures the accumulator starts as a number.
 *
 * Important:
 * Always return the updated accumulator when using
 * a block-bodied callback.
 *
 * If the callback does not return a value, it
 * implicitly returns undefined, which becomes
 * the accumulator for the next iteration.
 */
