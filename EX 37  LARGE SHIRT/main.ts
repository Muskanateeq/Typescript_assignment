// Question 37)
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

console.log("\nAnswer 37");

function large_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Making a large shirt with the default message
large_shirt();

// Making a medium shirt with the default message
large_shirt("Medium");

// Making a small shirt with a custom message
large_shirt("Small", "Hy, Muskan!");
