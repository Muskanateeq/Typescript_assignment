"use strict";
// Question 16)
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("Answer 16");
// Store the original list of people you'd like to invite to dinner
let guest_List2 = ["Kamran Tessori", "Sir Ziya", "Daniyal Negoori"];
// Print the original invitation messages
for (let i = 0; i < guest_List2.length; i++) {
    console.log("Dear Mr. " + guest_List2[i] + ",\n\nI will be very happy if you will come in my home.\n\nThank you! \n\n");
}
// Print a statement informing about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
guest_List2.unshift("Shahzad");
// Add one new guest to the middle of the array
guest_List2.splice(Math.floor(guest_List2.length / 2), 0, "Aliyan");
// Add one new guest to the end of the array
guest_List2.push("Shahzaib");
// Print the new invitation messages
console.log("\nNew invitations:\n");
for (let i = 0; i < guest_List2.length; i++) {
    console.log("Dear Mr. " + guest_List2[i] + ",\n\nI will be very happy if you will come in my home.\n\nThank you! \n\n");
}
let person = [
    "name: Malik",
    "age: 23",
    "Year: 2001"
];
for (let persons of person) {
    console.log(persons);
}
let a = "malik";
a = 1;
let b;
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4);
console.log(numbers);
// no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let head: number = numbers[0]; // no error
