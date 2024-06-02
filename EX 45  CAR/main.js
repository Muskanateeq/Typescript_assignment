// Question 45)
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log("\n Answer 45\n");
// Define a function to store car information
function cars_Info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    // Create an object to store car information
    var car = {
        Manufacturer: manufacturer,
        Model: model
    };
    // Add additional information to the car object
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    // Return the car object
    return car;
}
// Call the function with required information and additional name-value pairs
var carsInfo = cars_Info('Audi E Tron', 'GT', ['Color', 'black'], ['Year', 2024]);
// Print the object to verify the stored information
console.log(carsInfo);
