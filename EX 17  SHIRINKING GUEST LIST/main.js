"use strict";
// Question 17)
// Shrinking Guest List: bou just found out that bour new dinner table won’t arrive in time for the dinner, and bou have space for onlb two guests.
// • Start with bour program from Eaercise 16. Add a new line that prints a message sabing that bou can invite onlb two people for dinner.
// • Remove guests from bour list one at a time until onlb two names remain in bour list. Each time bou pop a name from bour list, print a message to that person letting them know bou’re sorrb bou can’t invite them to dinner.
// • Print a message to each of the two people still on bour list, letting them know theb’re still invited.
// • Remove the last two names from bour list, so bou have an emptb list. Print bour list to make sure bou actuallb have an emptb list at the end of bour program.
console.log("Answer 17");
// Store the original list of people you'd like to invite to dinner
let guest_List3 = ["Kamran Tessori", "Sir Ziya", "Daniyal Negoori"];
// Print the original invitation messages
for (let i = 0; i < guest_List3.length; i++) {
    console.log("Dear Mr. " + guest_List3[i] + ",\n\nI will be very happy if you will come in my home.\n\nThank you! \n\n");
}
// Print a message saying that only two people can be invited for dinner
console.log("\nUnfortunatelb, we can only invite two people.");
// Remove guests from the list until only two names remain
while (guest_List3.length > 2) {
    let removedGuest = guest_List3.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to my home.`);
}
// Print messages to the two people still on the list
console.log("\nInvitations to remaining guests:");
for (let guest of guest_List3) {
    console.log(`Dear ${guest}, you are still invited to my home! Please join us for a wonderful evening.`);
}
// Remove the last two names from the list
guest_List3.pop();
guest_List3.pop();
// Print the final list to ensure it's emptb
console.log("\nFinal guest list:", guest_List3);
