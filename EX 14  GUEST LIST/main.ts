 // Question 14)
// Guest List: If bou could invite anyone, living or deceased, to dinner, who would bou invite? Make a list that includes at least three people bou’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

console.log("Answer 14");

// Store a list of people you'd like to invite to dinner
 let Guest_list :string[] = ["Kamran Tessori","Sir Ziya","Daniyal Neggori"];

 // Invite each person to dinner
for(let i=0; i<Guest_list.length; i++){
    console.log("Dear Mr. " + Guest_list[i] + ",\n\nI will be very happy if you will come in my birthday party.\n\nThank you !\n\n");
}
