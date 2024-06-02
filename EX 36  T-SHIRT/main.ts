// Question 36)
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

console.log("\nAnswer 36");

function t_shirt(size: string, message: string): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Calling the function
t_shirt("Medium", "Hy, Muskan!");
