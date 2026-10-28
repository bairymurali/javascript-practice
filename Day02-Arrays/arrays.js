/**
 *
 * Your task is to write JavaScript code that:
    1. Creates an array of five employee names.
    2. Prints the total number of employees.
    3. Prints the first and last employee names.
    4. Adds a new employee using push().
    5. Removes the last employee using pop().
    6. Prints the updated employee list.

 */

const employees = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve"
];

console.log(`Total number of employees : ${employees.length}`);
console.log(`First employee name: ${employees[0]}`);
console.log(`Last employee name: ${employees[employees.length - 1]}`);

employees.push("Frank");
employees.pop();
console.log(`Updated employee list: ${employees}`);

/**
 * Notes:
 * Unlike Apex's List.add(),
 * JavaScript's push() returns the new array length.
 * pop() returns the removed element.
 */