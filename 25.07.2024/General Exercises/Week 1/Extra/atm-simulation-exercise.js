// # ATM Simulation Exercise - Multi-Part Project

// ## Objective
// Create a simple ATM (Automated Teller Machine) simulation using JavaScript. This project will cover variables, arithmetic operations, logical operators, comparison operators, and assignment operators.
console.log("Welcome to the ATM.\n ");
// ## Part 1: Variable Initialization

// ### Task
// Initialize the necessary variables for the ATM simulation.
let accountBalance = 1000
let isPinUserChoice;
let withdrawalAmount = 1000
// ### Requirements
// - Create variables for account balance, PIN code, and maximum withdrawal limit.
// - Use appropriate variable types (let/const) based on whether the values will change.

// ### Hints
// - Consider what data type each variable should be (number or string).
// - Think about which variables might need to change during the program's execution.

// ### Resources
// - [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
// - [JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)

// ## Part 2: PIN Verification
// ### Task
// Create a function to verify the user's PIN.
function PIN_Verification() {
        if (isPinUserChoice !== null && isPinUserChoice.trim() !== '' && !isNaN(isPinUserChoice) && isPinUserChoice >= 4) {
            console.log(`Your PIN has been changed to:${isPinUserChoice}`);
            return true

            
        } else {
            console.log('Invalid input. Please enter numbers only.');
            return false

        }
    }
// ### Requirements
// - The function should take an entered PIN as an argument.
// - It should return a boolean indicating whether the PIN is correct.

// ### Hints
// - Use comparison operators to check if the entered PIN matches the correct PIN.
// - Consider using strict equality (===) for comparison.

// ### Resources
// - [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
// - [JavaScript Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp)

// ## Part 3: Balance Check

// ### Task
// Implement a function to check and display the account balance.
function display() {
console.log(`Account balance: ${accountBalance.toLocaleString()} ₪`);
}
// ### Requirements
// - The function should return the current account balance.
// - Consider how to format the balance for display (e.g., two decimal places).

// ### Hints
// - You might want to use template literals for formatting the output string.
// - Think about whether this function needs any parameters.

// ### Resources
// - [JavaScript Numbers](https://www.w3schools.com/js/js_numbers.asp)
// - [JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)

// ## Part 4: Withdrawal Function
let isUserWithdrawal;
// ### Task
// Create a function to handle withdrawals from the account.
function withdrawal() {
    if (isUserWithdrawal !== null && isUserWithdrawal.trim() !== '' && !isNaN(isUserWithdrawal) && isUserWithdrawal > 0 && isUserWithdrawal <= accountBalance) {
        confirmWithdraw = isUserWithdrawal
        accountBalance -= confirmWithdraw
        console.log(`You have successfully withdraw: ${confirmWithdraw} ₪.\ncurrent balance is: ${accountBalance} ₪.`);
        return true
        
    } else {
        console.log(`You can't withdraw amount of: ${isUserWithdrawal} ₪, please try again.`);
        return false
    }
}
// ### Requirements
// - The function should take the withdrawal amount as an argument.
// - It should check if the withdrawal is valid (sufficient balance and within maximum limit).
// - If valid, it should update the account balance and return the withdrawn amount.
// - If invalid, it should return an appropriate message or value.

// ### Hints
// - Use arithmetic operators to calculate the new balance.
// - Use comparison operators to check if the withdrawal is valid.
// - Consider using logical operators to combine multiple conditions.
// - Don't forget to use assignment operators to update the balance.

// ### Resources
// - [JavaScript Arithmetic Operators](https://www.w3schools.com/js/js_arithmetic.asp)
// - [JavaScript Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)
// - [JavaScript Assignment Operators](https://www.w3schools.com/js/js_assignment.asp)

// ### Task
// Implement a function to handle deposits to the account.
let confirmDeposit;

function deposit() {
    if (isUserDeposit !== null && isUserDeposit.trim() !== '' && !isNaN(isUserDeposit) && isUserDeposit > 0) {
        confirmDeposit = Number(isUserDeposit)
        accountBalance += confirmDeposit
        console.log(`You have successfully deposit: ${confirmDeposit} ₪.\ncurrent balance is: ${accountBalance} ₪.`);
        return true
    }
    else (console.log("You can't deposit below 0 or negative amount.")) 
}
// ### Requirements
// - The function should take the deposit amount as an argument.
// - It should update the account balance and return the new balance.

// ### Hints
// - Use an assignment operator to update the account balance.
// - Think about whether you need to validate the deposit amount.

// ### Resources
// - [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
// - [JavaScript Arithmetic Operators](https://www.w3schools.com/js/js_arithmetic.asp)

// ## Part 6: Main ATM Logic
// ### Task
// Create the main function that simulates the ATM's operation.
function isVisitAtmAgain() {
    while (true) {
let isRunAgain = prompt("Would you like to visit again the ATM (type `yes` or `no`):")
if (isRunAgain.toLowerCase() === 'yes')
    return true
else if (isRunAgain.toLowerCase() === 'no') 
return false

else {
    console.log("Invaild answer, please type 'yes or 'no.");
}
    }
}

function main() {
    while (true) {
        isPinUserChoice = prompt("Choose a PIN, must be numbers only.");
        if (PIN_Verification(isPinUserChoice) === true) {
            display();
            break;
        }

    }
    while (true) {
    isUserWithdrawal = prompt("How much would you like to withraw?: ")
    if (withdrawal(isUserWithdrawal) === true )
        break; {
    }
}
    while (true) {
    isUserDeposit = prompt("How much would you like to deposit?")
    if (deposit() === true) {
        break;
    }
}
    if (isVisitAtmAgain() === true)
        main()

    else console.log("Bye bye...");
    }

// ### Requirements
// - The function should prompt the user for their PIN.
// - If the PIN is correct, it should present options (check balance, withdraw, deposit).
// - Based on the user's choice, it should call the appropriate function.
// - It should display relevant messages to the user (success, error, etc.).

// ### Hints
// - Consider using a loop to allow multiple transactions.
// - Think about how to handle invalid user inputs.
// - Use conditional statements to process the user's choice.

// ### Resources
// - [JavaScript if...else Statements](https://www.w3schools.com/js/js_if_else.asp)
// - [JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)
// - [JavaScript Loops](https://www.w3schools.com/js/js_loop_for.asp)

// ## Part 7: Integration
main()
// ### Task
// Combine all the functions you've created into a cohesive ATM simulation program.

// ### Requirements
// - Ensure all parts work together seamlessly.
// - The program should run without errors and handle various scenarios gracefully.

// ### Hints
// - Test your program with different inputs and scenarios.
// - Consider adding error handling for unexpected situations.

// ### Resources
// - [JavaScript Errors](https://www.w3schools.com/js/js_errors.asp)
// - [JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)

// ## Bonus Challenges
// 1. Implement a feature to track failed PIN attempts and lock the account after 3 fails.
// 2. Add a feature to display the last 5 transactions.
// 3. Implement a daily withdrawal limit in addition to the per-transaction limit.

// ## Final Steps
// - Test your ATM simulation thoroughly.
// - Consider edge cases and how your program handles them.
// - Refactor your code for clarity and efficiency if needed.

// Remember to apply the concepts of variables, arithmetic operations, logical operators, comparison operators, and assignment operators throughout your solution. Good luck!

// [JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
