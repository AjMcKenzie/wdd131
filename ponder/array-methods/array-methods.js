// 1. Javascript Array
let names = ["Alice", "Bob", "Charlie"];
console.log(names);

console.log(names[1]);
console.log(names[3]);
console.log(names[names.length-1]);

let age = [25, 30, 35];

let mixArray = ["Alice", 25, "Bob", 30, "Charlie", 35];
console.log(mixArray);

// 2. Javascript objects
// let studentName = "Mike";
// let studentClass = "WDD131";

// Literal Objects
let student = {
    name: "Mike",
    class: "WDD131",
    grade: "A",
    age: 27
};
console.log(student);
console.log(student.name);
console.log(student.class);
console.log(student.grade);
console.log(student.age);


// 3. Array Methods

names.forEach((name) =>{
    console.log(name);
});

// Map function returns a NEW array with values returned from the function
let upperCaseNames = names.map((name) => {
    return name.toUpperCase();
});

console.log(upperCaseNames);

// Filter function returns a NEW array with filtered values
let filteredNames = names.filter((name) => {
    // filter returns boolean. True keep, false don't keep
    return name[0] === "B";
    // return name.includes("a");
});

console.log(filteredNames);


// .reduce()
let averageAge = age.reduce((total, current) => {
    return total + current;
}) / age.length;

console.log(averageAge);


// .indexOf()
let index = names.indexOf("Bob");
console.log(index);


// Template Literals
let firstName = "Alice";
let lastName = "Smith";
let fullName = `Full name: ${firstName} ${lastName}`;
console.log(fullName);
