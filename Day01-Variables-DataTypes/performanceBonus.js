/**
 * Business requirement: Calculate an employee's bonus based on their performance rating.
Performance rating	Bonus percentage
5	20%
4	15%
3	10%
Below 3	0%

Expected output:
Performance Rating: 4
Bonus Percentage: 15%
Bonus Amount: 7500
Total Salary: 57500
 */

const basicSalary = 50000;
const performanceRating = 4;

let bonusPercentage;

if (performanceRating === 5) {
    bonusPercentage = 20;
}else if (performanceRating === 4) {
    bonusPercentage = 15;
}else if (performanceRating === 3) {
    bonusPercentage = 10;
}else {
    bonusPercentage = 0;
}

const bonusAmount = (basicSalary * bonusPercentage) / 100;
const totalSalary = basicSalary + bonusAmount;

console.log(`Performance Rating: ${performanceRating}`);
console.log(`Bonus Percentage: ${bonusPercentage}%`);
console.log(`Bonus Amount: ${bonusAmount}`);
console.log(`Total Salary: ${totalSalary}`);