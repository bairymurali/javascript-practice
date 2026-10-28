/**
 *
 * Next: JavaScript Day 02 — Exercise 3
Topic: Arrays of Objects and Loops

Now use the five-employee array from our previous exercise.

Your tasks are to print all employees using for...of,
filter employees earning more than ₹50,000, calculate the total salary,
count IT department employees, and calculate the average salary.
 */



/**
 * output:
 * Your expected calculations are:
Calculation	Expected result
Total employees	5
Employees earning above ₹50,000	3
Total salary	₹2,90,000
IT employees	2
Average salary	₹58,000
 */

// Create an array containing 5 employees with details

const arrays = [
    {
        'name': 'Alice',
        'age': 28,
        'salary': 50000,
        'department': 'IT',
        'isActive': true
    },

    {
        'name': 'Bob',
        'age': 38,
        'salary': 55000,
        'department': 'Finance',
        'isActive': true
    },

     {
        'name': 'Josh',
        'age': 48,
        'salary': 60000,
        'department': 'IT',
        'isActive': true
    },

    {
        'name': 'Charles',
        'age': 58,
        'salary': 65000,
        'department': 'Engineering',
        'isActive': true
    },

    {
        'name': 'Alisa',
        'age': 54,
        'salary': 65000,
        'department': 'Sales',
        'isActive': true
    }

];

let totalSalary = 0;
let averageSalary = 0;
const arrayLength = arrays.length;
let itEmployeeCount = 0;

// total employees
console.log(`Total employees: ${arrays.length}`);

// name of first employee
console.log(arrays[0].name);
// employees earning above ₹50,000


console.log("Retrieving employees whose salary is greate than 50000");
for(const employee of arrays){

    if(employee.salary > 50000){
        console.log(employee.name);
    }

    totalSalary += employee.salary;

    if (employee.department === "IT") {
    // Increment the counter
    itEmployeeCount++;
    }
}

console.log(`Total Salary: ${totalSalary}`);
averageSalary = totalSalary / arrayLength;

console.log(`Average salary: ${averageSalary}`);

console.log(`IT employee count: ${itEmployeeCount}`)

