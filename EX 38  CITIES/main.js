"use strict";
// Question 38)
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log("\nAnswer 38");
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city("Islamabad");
describe_city("Balochistan");
describe_city("Lahore");
