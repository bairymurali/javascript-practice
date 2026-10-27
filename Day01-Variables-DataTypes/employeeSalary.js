const employeeName = 'Rahul';
let basicSalary = 50000;
const bonusPercentage = 15;
const bonusAmount = (basicSalary * bonusPercentage) / 100;
const totalSalary = basicSalary + bonusAmount;


console.log(`Employee Name: ${employeeName}`);
console.log(`Basic Salary: $${basicSalary}`);
console.log(`Bonus Percentage: ${bonusPercentage}%`);
console.log(`Bonus Amount: $${bonusAmount}`);
console.log(`Total Salary: $${totalSalary}`);
