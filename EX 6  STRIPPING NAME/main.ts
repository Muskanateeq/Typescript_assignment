//  Question no 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

 console.log("\nAnswer 6\n")

//  print with whitespace
const personName :string = "    \n\tMuskan Ateeq\t\n    ";
console.log(personName)

//  print without_whitespace
const without_whitespace :string = personName.trim();
console.log(without_whitespace)