// Nested Loops



// Exercise 1: Star Pattern
// Objective: Create a program that prints a right triangle pattern of stars (*).
// Instructions:
// Use two nested loops. The outer loop should iterate through numbers 1 to 5 (representing the row number).
// The inner loop should print stars equal to the current row number.
// Each row should end with a new line.
// Example Output: 
// *
// **
// ***
// ****
// *****
let i = 0
let row = 0
let secondline = ` `
let column = ``
let combined;
for (i = 0; i < 2; i++) {
    secondline += '*'
    console.log(secondline);
}   for(row = 0; row < 3; row++) {
    column += `*`
    combined = secondline+column
    console.log(combined);
}

// Exercise 2: Multiplication Table
// Objective: Write a program that prints a multiplication table for numbers 1 through 5.
// Instructions:
// Use two nested for loops. The outer loop should iterate through numbers 1 to 5.
// The inner loop should also iterate through numbers 1 to 5.
// Multiply the numbers from the outer and inner loops and print the result.
// Example Output:
// Copy code
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25

// Exercise 3: Array Search
// Objective: Find a specific number in a 2D array and print its position.
// Instructions:
// Create a 2D array (e.g., let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];).
// Use two nested loops to iterate over the elements of the array.
// Check each element to see if it matches the target number.
// If the target number is found, print its position (row and column).
// Example Output:
// For target = 5, output: Found 5 at position (1, 1)
// For target = 7, output: Found 7 at position (2, 0)
let arr = [
[1, 2, 3], 
[4, 5, 6], 
[7, 8, 9]]
let num = 9
j = 0
let k;
for (i = 0; i < arr.length; i++) {
    j = arr[i]
    console.log(`3D Scope:`,j);
}   for(k = 0; k < j.length; k++) {
    if (j[k] === num) {
        console.log(`Found at 3D scope: ${[i]}\nat 2D scope: ${[k]}\nThe Target Num: ${j[k]}`);
    }
}
// Exercise 4: Count Vowels and Consonants
// Objective: Write a program to count the number of vowels and consonants in a given string.
// Instructions:
// Take a string as input.
// Use a loop to iterate over each character in the string.
// Use another loop (or a set of conditions) to check if the character is a vowel or consonant.
// Keep a count of vowels and consonants.
// for simplicity,string should contain only letters.
// Example Output:
// For input = "hello", output: Vowels: 2, Consonants: 3
// For input = "world", output: Vowels: 1, Consonants: 4

// Exercise 5: Reverse a String
// Objective: Write a program that reverses a given string using nested loops.
// Instructions:
// Take a string as input.
// Use a loop to iterate over each character in the string.
// Use a nested loop to reverse the string by iterating from the end to the beginning.
// Example Output:
// For input = "hello", output: olleh
// For input = "world", output: dlrow
let string = 'hello';
let stringIndex;
let reverseString;
let reverseWord = '';
let correctWord = '';

for (let i = 0; i < string.length; i++) {
    stringIndex = string[i];
    correctWord += stringIndex; 
}

for (let j = string.length - 1; j >= 0; j--) {
    reverseString = string[j];
    reverseWord += reverseString;
}

console.log(reverseWord);

// Exercise 6: Number Pyramid
// Objective: Create a program that prints a number pyramid.
// Instructions:
// Use nested loops to print a pyramid of numbers.
// The outer loop should iterate through the number of rows (e.g., 5).
// The inner loop should print numbers from 1 up to the current row number.
// Example Output:
// 1
// 12
// 123
// 1234
// 12345

let currentRow;
let rowCount;
let columnCount;

for (rowCount = 1; rowCount <= 5; rowCount++) {
    currentRow = ``;
    for (columnCount = 1; columnCount <= rowCount; columnCount++) {
        currentRow += columnCount;
    }
    console.log(currentRow);
}

// Exercise 7: Sum of 2D Array Elements
// Objective: Calculate the sum of all elements in a 2D array.
// Instructions:
// Create a 2D array with numbers.
// Use nested loops to iterate over each element.
// Sum all the elements and print the total.
// Example Output:
// For arr = [[1, 2], [3, 4], [5, 6]], output: Sum: 21
arr = [[1, 2], [3, 4], [5, 6]]
let sum = 0
i;
j;
k;
let p;
for (i = 0; i < arr.length; i++) {
    j = arr[i]
    // console.log(j);
    for(k = 0; k < j.length; k++) {
        p = j[k]
        sum += p
        // console.log(p);
    }

}
console.log(`Result of Exercise 7:`,sum);
// Exercise 8: Character Frequency
// Objective: Write a program to find the frequency of each character in a string.
// Instructions:
// Take a string as input.
// Use nested loops to count the frequency of each character.
// Print each character and its frequency.
// Example Output:
// For input = "hello", output: h: 1, e: 1, l: 2, o: 1

// Exercise 9: Flatten a 2D Array
// Objective: Convert a 2D array into a 1D array.
// Instructions:
// Create a 2D array with some numbers.
// Use nested loops to iterate over each element.
// Store all elements in a new 1D array and print the result.
// Example Output:
// For arr = [[1, 2], [3, 4], [5, 6]], output: [1, 2, 3, 4, 5, 6]

// Exercise 10: Matrix Transpose
// Objective: Transpose a given matrix.
// Instructions:
// Create a 2D array representing a matrix.
// Use nested loops to switch the rows and columns of the matrix.
// Print the transposed matrix.
// Example Output:
// For matrix = [[1, 2, 3], [4, 5, 6]], output: [[1, 4], [2, 5], [3, 6]]

// Exercise 11: Palindrome Check
// Objective: Check if a given string is a palindrome.
// Instructions:
// Take a string as input.
// Use nested loops to compare characters from the beginning and end of the string.
// Print whether the string is a palindrome.
// Example Output:
// For input = "radar", output: Palindrome
// For input = "hello", output: Not a palindrome

// Exercise 12: Find Common Elements in Two Arrays
// Objective: Find common elements between two arrays.
// Instructions:
// Create two arrays with numbers.
// Use nested loops to find and print the common elements.
// Example Output:
// For arr1 = [1, 2, 3, 4] and arr2 = [3, 4, 5, 6], output: Common elements: 3, 4

// Exercise 13: Check for Prime Numbers in a Range
// Objective: Write a program to find all prime numbers in a given range.
// Instructions:
// Take a range (start and end) as input.
// Use nested loops to check each number in the range.
// Print the prime numbers found.
// Example Output:
// For range = (10, 20), output: Prime numbers: 11, 13, 17, 19

// Exercise 14: Sort a 2D Array by Row Sum
// Objective: Sort the rows of a 2D array based on the sum of their elements.
// Instructions:
// Create a 2D array with numbers.
// Use nested loops to calculate the sum of each row.
// Sort the rows based on their sum and print the sorted array.
// Example Output:
// For arr = [[3, 1, 2], [1, 4, 5], [2, 3, 1]], output: [[2, 3, 1], [3, 1, 2], [1, 4, 5]]
