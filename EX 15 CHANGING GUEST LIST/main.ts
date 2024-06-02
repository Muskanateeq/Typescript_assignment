// Question 15)
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

console.log("Answer 15");

// Store the original list of people bou'd like to invite to dinner

let guest_list :string[] = ["Kamran Tessori","Sir Ziya","Daniyal Neggori"];

// Print the original invitation messages

for(let i=0; i<guest_list.length; i++){
    console.log("Dear Mr. " + guest_list[i] + ",\n\nI will be very happy if you will come in my home.\n\nThank you! \n\n");

}
// Print the name of the guest who can't make it
let absent_Guest :string ="Kamran Tessori";

// Replace the guest who can't make it with a new person
let new_Guest :string ="Ameen Alam";
guest_list[0] =new_Guest;

for(let i=0; i<guest_list.length; i++){
    console.log("Dear Mr. " + guest_list[i] + ",\n\nI will be very happy if you will come in my home.\n\nThank you! \n\n");

}
console.log(`Mr . ${absent_Guest} is not coming in my home`);
