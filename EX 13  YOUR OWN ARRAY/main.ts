//  Question 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

 console.log('\nAnswer 13\n')
 
let transportations:string[] =["Car","Motercycle","Aeroplane"];

const newmessage:string ="I would like to own a ";
for(let i=0; i<transportations.length; i++){
    console.log(newmessage + transportations[i]);
}