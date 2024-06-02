"use strict";
// Question 39)
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log("\nAnswer 39");
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Calling the function with three city-country pairs
console.log(city_country("tokyo", "Japan"));
console.log(city_country("Berlin", "Germany"));
console.log(city_country("Riyadh", "South Arabia"));
