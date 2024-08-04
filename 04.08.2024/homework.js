"use strict";

let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// TODO: Write a function to update the person's city
function updateCity(person, newCity) {
  person.address.city = newCity 
  return person.address.city
}

// updateCity(person, "Los Angeles");
// console.log("Updated Person:", person);

/////////////////////////////////////////////////////

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// TODO: Write a function to return an array of student names
function getStudentNames(students) {
    let studentNames = []
  for (let i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
    
    
  }
  return studentNames
}

// let names = getStudentNames(students);
// console.log("Student Names:", names);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
    console.log(students, id);
    
}

// let studentId = getStudentById(students, 2);
// console.log("Found Student:", studentId);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}

// let student = getStudentById(students, 2);
// console.log("Found Student:", student);

// TODO: Write a function to add a new student to the array
function addStudent(students, newStudent) {
    students.push(newStudent);
  }

// addStudent(students, { id: 4, name: "Joseph", age: 24 });
// console.log("Updated Students:", students);

/////////////////////////////////////////////////////

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

// TODO: Write a function to toggle the product's availability
function toggleAvailability(product) {
    if (product.isAvailable === true) {
        product.isAvailable = false;
    } else {
        product.isAvailable = true;
    }
    return product.isAvailable;
}
// toggleAvailability(product);
// console.log("Updated Product:", product);

// TODO: Write a function to update the product's price
function updatePrice(product, newPrice) {
  product.price = newPrice
  return product.price
}

// updatePrice(product, 1500);
// console.log("Updated Product:", product);

// TODO: Write a function to remove a category from the product
function removeCategory(product, category) {
    delete product.categories[product.categories.length - 1];
    return category
    
}

// removeCategory(product, "tech");
// console.log("Updated Product:", product)

/////////////////////////////////////////////////////

let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];

// TODO: Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
    let highestPrice = 0
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > products[i++].price) {
        highestPrice = products[i].price;
        
    } else {
        highestPrice = products[i++].price;
        
    }
    
  }
  return highestPrice
}

// let expensiveProduct = findMostExpensiveProduct(products);
// console.log("Most Expensive Product:", expensiveProduct);

// TODO: Write a function to return an array of only available product sizes
function getAvailableSizes(products) {
    let newArray = []
    for (let i = 0; i < products.length; i++) {
        if (products[i].isAvailable === true) {
            newArray.push(products[i].sizes)

        }
        

    }
    return newArray
}

// let sizes = getAvailableSizes(products);
// console.log("Available Sizes:", sizes);

/////////////////////////////////////////////////////

let student = {
  name: "Alice",
  age: 20,
};

// TODO: Write a function to add a new property to the student object
function addProperty(student, key, value) {
  let newProperty = student[key] = value
  return newProperty
}

// addProperty(student, "grade", "A");
// console.log("Updated Student:", student);

/////////////////////////////////////////////////////

let school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

// TODO: Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {

    school.students[studentId].grades[subject] = newGrade
}

// updateStudentGrade(school, 1, "math", 90);
// console.log("Updated School:", school);

/////////////////////////////////////////////////////

let orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

// TODO: Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
    let finishOrders = []
    for (let i = 0; i < products.length; i++) {
        if (orders[i].status === "delivered") {
            finishOrders.push(orders[i])

        }
        
    }
    return finishOrders
}

// let deliveredOrders = getDeliveredOrders(orders);
// console.log("Delivered Orders:", deliveredOrders);

// TODO: Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
    let countProducts = {};

    for (let i = 0; i < orders.length; i++) {
        let product = orders[i].product;

        // Initialize or increment the count for the product
        if (countProducts[product]) {
            countProducts[product]++;
        } else {
            countProducts[product] = 1;
        }
    }

    return countProducts;
}

// let productCounts = countProductOccurrences(orders);
// console.log("Product Counts:", productCounts);

/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */