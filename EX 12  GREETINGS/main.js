"use strict";
//  Question 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log('\nAnswer 12\n');
let names_info = ["Shahzad", "Aliyan", "Shahzaib", "Kashaf"];
const message = "I hope you are a great well:  ";
for (let i = 0; i < names_info.length; i++) {
    console.log(message + names_info[i]);
}
