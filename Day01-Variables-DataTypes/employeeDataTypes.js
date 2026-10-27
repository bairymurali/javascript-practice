const employeeName = 'Priya';
const employeeAge = 28;
const isActive = true;
const employeeSalary = 65000.50;
let employeeDepartment;
const managerName = null;

/**
 * output:
 * Employee Name: Priya, Type: string
Employee Age: 28, Type: number
Is Active: true, Type: boolean
Employee Salary: 65000.5, Type: number
Employee Department: undefined, Type: undefined
Manager Name: null, Type: object
 */

console.log(`Employee Name: ${employeeName}, Type: ${typeof employeeName}`);
console.log(`Employee Age: ${employeeAge}, Type: ${typeof employeeAge}`);
console.log(`Is Active: ${isActive}, Type: ${typeof isActive}`);
console.log(`Employee Salary: ${employeeSalary}, Type: ${typeof employeeSalary}`);
console.log(`Employee Department: ${employeeDepartment}, Type: ${typeof employeeDepartment}`);
console.log(`Manager Name: ${managerName}, Type: ${typeof managerName}`);

/**
 * Interview tip

A common JavaScript interview question is: What is the difference between null and undefined?

undefined generally means a value has not been assigned, whereas null is an intentional absence of a value. 
Interestingly, typeof null returns "object" due to a long-standing JavaScript quirk.
 */

 /**
  * Important LWC interview concept
  */

const employee = {
    name: 'Priya',
    salary: 65000
};

employee.salary = 70000; // Allowed

