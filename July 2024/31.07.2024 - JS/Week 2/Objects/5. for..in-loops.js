// # Understanding for...in Loops in JavaScript

// The `for...in` loop is a special type of loop in JavaScript that allows you to iterate over the enumerable properties of an object. It's particularly useful when you need to work with object properties but don't know their names in advance.

// ## Table of Contents
// 1. [Basic Syntax](#basic-syntax)
// 2. [How for...in Works](#how-for-in-works)
// 3. [Using for...in with Objects](#using-for-in-with-objects)
// 4. [Cautions and Best Practices](#cautions-and-best-practices)
// 5. [for...in vs for...of](#for-in-vs-for-of)
// 6. [Practical Examples](#practical-examples)
// 7. [Practice Exercises](#practice-exercises)

// ## Basic Syntax

// The basic syntax of a `for...in` loop is as follows:

// ```javascript
// for (let key in object) {
//     // code to be executed
// }
// ```

// Here, `key` is a variable that takes on the value of each enumerable property name in `object`.

// ## How for...in Works

// 1. The loop iterates over all enumerable properties of an object, including inherited properties.
// 2. In each iteration, the `key` variable is assigned the name of the current property.
// 3. The loop continues until all properties have been processed.

// ## Using for...in with Objects

// Here's a simple example:

// ```javascript
// let person = {
//     name: "Alice",
//     age: 30,
//     job: "Engineer"
// };

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// // Output:
// // name: Alice
// // age: 30
// // job: Engineer
// ```

// ## Cautions and Best Practices

// 1. **Use `hasOwnProperty()` to exclude inherited properties:**

// ```javascript
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(key + ": " + person[key]);
//     }
// }
// ```

// 2. **Don't use `for...in` on arrays if index order is important:**
//    The order of iteration is not guaranteed, which can lead to unexpected results with arrays.

// 3. **Be cautious with `for...in` on arrays:**
//    It can include non-index properties if they exist.

// ## for...in vs for...of

// - `for...in` iterates over property names.
// - `for...of` iterates over property values (works with iterable objects like arrays and strings).

// ```javascript
// let colors = ["red", "green", "blue"];

// // for...in
// for (let index in colors) {
//     console.log(index); // "0", "1", "2"
// }

// // for...of
// for (let color of colors) {
//     console.log(color); // "red", "green", "blue"
// }
// ```

// ## Practical Examples

// 1. **Counting property occurrences:**

// ```javascript
// let fruits = {apple: 5, banana: 3, orange: 2};
// let total = 0;

// for (let fruit in fruits) {
//     total += fruits[fruit];
// }

// console.log("Total fruits:", total);
// ```

// 2. **Copying properties from one object to another:**

// ```javascript
// let source = {a: 1, b: 2, c: 3};
// let target = {};

// for (let key in source) {
//     target[key] = source[key];
// }

// console.log(target); // {a: 1, b: 2, c: 3}
// ```

// ## Practice Exercises

// 1. Create an object representing a car with properties like make, model, year. Use a `for...in` loop to print all the properties and their values.

// 2. Given an object of student grades, use a `for...in` loop to calculate the average grade.

// ```javascript
// let grades = {Alice: 90, Bob: 85, Charlie: 92};
// ```

// 3. Write a function that takes an object and returns a new object with the same properties, but all string values converted to uppercase.

// 4. Create an object representing a library catalog. Use a `for...in` loop to print out all books that are currently checked out.

// 5. Given an object of product prices, use a `for...in` loop to apply a 10% discount to all products.

// ```javascript
// let prices = {apple: 0.50, banana: 0.75, orange: 0.80};
// ```

// Remember to test your code and experiment with different scenarios to deepen your understanding of `for...in` loops!
