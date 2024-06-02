// Question 41)
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

console.log("\nAnswer 41\n");

function showMagicians(magicians: string[]): void {
    // Prints the name of each magician in the array
    magicians.forEach(magician => console.log(magician));
}

// Array of magician names
const magicianNames: string[] = ["Muskan", "Shahzad", "Zain", "Aliyan", "Shahzaib"];

// Call the function to show magician names
showMagicians(magicianNames);