/* Below, I have created a situation where I will use switch statements to have the console
log the correct information based on the inputs stored into the variables.  This way, when the inputs are
entered, the forms will collectively result in a message box with the correct message, as well as the 
correct message logged into the console.assert(expression) */

switch (true) {
  case (state == "NE" && temp < 32):  
    console.log(`Hello ${userName}, ${message[0]}`)
    break
  case (state == "NE" && temp >=32 && temp <=50):  
    console.log(`Hello ${userName}, ${message[1]}`)
    break
  case (state == "FL" && temp>=32 && temp <=50):  
    console.log(`Hello ${userName}, ${message[2]}`)
    break
  case (state == "FL" && temp>50 && temp <=70):  
    console.log(`Hello ${userName}, ${message[3]}`)
    break
  default:
     console.log(`Hello ${userName}, please enter valid information.`)
}