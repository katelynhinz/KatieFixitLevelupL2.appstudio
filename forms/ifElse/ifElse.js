/* 
Below, I am establishing the variables that will hold the person's name, state, 
the current temperature, and the array of possible messages
*/
let userName = prompt("Please enter your name.")
let state = prompt("Please enter the two-letter abbreviation of your state.")
let temp = prompt("Please enter the temperature.")
let message = ["	wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "	wear a warm coat, hat and gloves. Maybe a scarf too."]

/*Below, I have an ifelse compilation of the possible entries and the messages they would result in. 
To do this, I created if statements for certain inputs, and then the index number of the messages array
that would be called in the Message Box.  */

if (state == "NE" && temp < 32) {
  NSB.MsgBox(`Hello ${userName}, ${message[0]}`)
} else if (state == "NE" && temp >=32 && temp <=50) {
  NSB.MsgBox(`Hello ${userName}, ${message[1]}`)
}  else if (state == "FL" && temp >=32 && temp <=50) {
  NSB.MsgBox(`Hello ${userName}, ${message[2]}`)
}  else if (state == "FL" && temp >50 && temp <=70) {
  NSB.MsgBox(`Hello ${userName}, ${message[3]}`)
}  else {
  NSB.MsgBox(`Hello ${userName}, please enter valid information.`)
}