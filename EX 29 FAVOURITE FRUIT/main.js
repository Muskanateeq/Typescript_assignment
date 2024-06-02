"use strict";
// Question 29)
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
console.log("\n Answer 29\n");
let favorite_fruits = ['strawberry', 'pomegranate', 'watermelon'];
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes('pomegranate')) {
    console.log("You really like pomegranates!");
}
if (favorite_fruits.includes('watermelon')) {
    console.log("You really like watermelons!");
}
if (favorite_fruits.includes('cherry')) {
    console.log("You really like cherries!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
