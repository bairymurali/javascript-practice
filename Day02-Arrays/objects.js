/**
 * Then write code to:
1. Print the employee's name and department using dot notation.
2. Update the salary to 65000.
3. Add a new property, performanceRating, with value 4.
4. Delete the age property.
5. Print the updated employee object.
6. Bonus: Print the total number of remaining properties using Object.keys().
 */

const employee = {
    'name': 'Alice',
    'age': 28,
    'salary': 50000,
    'department': 'IT',
    'isActive': true
}

console.log(`Employee Name: ${employee.name}`);
console.log(`Employee Department: ${employee.department}`);

// Update the salary to 65000.
employee.salary = 65000;
console.log(`Updated Salary: ${employee.salary}`);

// Add a new property, performanceRating, with value 4.
employee.performanceRating = 4;

// Delete the age property.
delete employee.age;

// Print the updated employee object.
console.log('Updated Employee Object:', employee);

// Bonus: Print the total number of remaining properties using Object.keys().

const totalProperties = Object.keys(employee).length;
console.log(`Total number of remaining properties: ${totalProperties}`);