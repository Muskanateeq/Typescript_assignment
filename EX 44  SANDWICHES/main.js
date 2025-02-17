"use strict";
// Question 44)
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("\n Answer 44");
// Function to print the sandwich summary
function make_Sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich ready!\n");
}
// Calling the function three times with different number of arguments
make_Sandwich('mayonaise', 'ketchup');
make_Sandwich('egg', 'cheese Mayonnaise');
make_Sandwich('Cheese', 'Tomato', 'Onion', 'egg');
