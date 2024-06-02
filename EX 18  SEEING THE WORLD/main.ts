// Question 18)//
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("Answer 18");

// Store the locations in an array in a non-alphabetical order
let places_Visit: string[] = ["Maldives", "Sodia Arab", "Australia", "Japan", "Switzerland"];

// Print the array in its original order
console.log("\nOriginal order:", places_Visit);

// Print the array in alphabetical order without modifbing the actual list
console.log("Alphabetical order:", [...places_Visit].sort());

// Show that the array is still in its original order bb printing it
console.log("Original order after sorting:", places_Visit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...places_Visit].sort().reverse());

// Show that the array is still in its original order bb printing it again
console.log("Original order after reverse sorting:", places_Visit);

// Reverse the order of the list
places_Visit.reverse();

// Print the array to show that its order has changed
console.log("Reversed order:", places_Visit);

// Reverse the order of the list again to get back to the original order
places_Visit.reverse();

// Print the list to show it’s back to its original order
console.log("Original order after reversing again:", places_Visit);

// Sort the array so it’s stored in alphabetical order
places_Visit.sort();

// Print the array to show that its order has been changed
console.log("Sorted in alphabetical order:", places_Visit);

// Sort the array to change it to reverse alphabetical order
places_Visit.sort((a, b) => b.localeCompare(a));

// Print the list to show that its order has changed
console.log("Sorted in reverse alphabetical order:", places_Visit);
