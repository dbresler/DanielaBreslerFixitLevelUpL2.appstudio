const firstName = prompt('What is your first name?'); /*asking what is your name as a pop=up*/
//hello world
let uppercaseFirstLetter = firstName.charAt(0).toUpperCase() + firstName.slice(1); /*making the first letter of your name capital*/

const stateId = prompt('What state are your from?'); /*creating a variable asking what state someone is from*/
 
let uppercaseState = stateId.charAt(0).toUpperCase() + stateId.charAt(1).toUpperCase(); /*making both letters capital*/ 

const tempAnswer = prompt('What is the temperature outside (degrees F)?'); /*message asking what the temperature is outside */

const tempMessages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.",
  "wear a less heavy coat.", "wear a light jacket and smile!"] ; 
  /*creating messages about the wear with the temperature outside*/
  
let currentMessage = ''; /*the message that appears*/

if (uppercaseState == 'NE')  /*creating statements about NE, when the weather is below 32 degrees, in between 32 and 50 degrees, and not giving suggestions when the temperature doesn't match*/
    {
      if ( tempAnswer < 32) 
      {
          currentMessage = tempMessages[0];
      } 
    else if (tempAnswer <= 50) 
      {
           currentMessage = tempMessages[1];
     } 
    else 
      {
                    currentMessage = 'I do not have a suggestion for this temperature.';
      }
}
else if (uppercaseState == 'FL') /*creating statements about FL, when the weather is below 32 degrees, in between 32 and 50 degrees, in between 50 and 70, and not giving suggestions when the temperature doesn't match*/
    {
    if (tempAnswer < 32) 
      {
                    currentMessage = 'I do not have a suggestion for this temperature.';
      }
    else if (tempAnswer <= 50) 
        {
           currentMessage = tempMessages[2];
        }
    else if (tempAnswer <= 70) 
       {
           currentMessage = tempMessages[3];
        }
    else 
       {
                    currentMessage = 'I do not have a suggestion for this temperature.'; /*a message when none of the temperatures are imputed.*/
        }
  }
else {
    currentMessage = 'I do not have a suggestion for this state.'; /*a message when it isn't either of states mentioned*/
}

NSB.MsgBox(`${uppercaseFirstLetter}, ${currentMessage}`); /*to display all the messages at the end, with the name and temperature message*/

