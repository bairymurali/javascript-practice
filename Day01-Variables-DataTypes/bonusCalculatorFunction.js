/**
 * Create bonusCalculatorFunction.js.

Your task is to write a function named calculateBonus that:
1. Accepts two parameters: basicSalary and performanceRating.
2. Determines the bonus percentage using the same rating rules from Exercise 4.
3. Calculates the bonus amount.
4. Returns the bonus amount instead of printing it inside the function.
5. Calls the function with 50000 and 4.
6. Prints the returned bonus amount using console.log().
 */

function calculateBonus(basicSalary, performanceRating) {  
    let bonusPercentage = 0;
    if (performanceRating === 5) {
        bonusPercentage = 20;
    } else if (performanceRating === 4) {
        bonusPercentage = 15;
    } else if (performanceRating === 3) {
        bonusPercentage = 10;
    } else {
        bonusPercentage = 0;
    }

    const bonusAmount = (basicSalary * bonusPercentage) / 100;
    return bonusAmount;
}

const bonus = calculateBonus(50000, 4);
console.log(bonus); // 7500