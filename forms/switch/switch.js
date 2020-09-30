var userName = prompt('What is your first name?');  /*asking what is your name as a pop=up*/

let uppercaseLetterFirst = userName.charAt(0).toUpperCase() + userName.slice(1); /*making the first letter of your name capital*/

var idState= prompt('What state are your from?'); /*creating a variable asking what state someone is from*/
 
let uppercaseIdstate = idState.charAt(0).toUpperCase() + idState.charAt(1).toUpperCase(); /*making both letters capital*/ 

var weatherMes = prompt('What is the temperature outside (degrees F)?'); /*message asking what the temperature is outside */

var weatherPrompt = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.",
  ""wear a less heavy coat.", "wear a light jacket and smile!"] ; 
  /*creating messages about the wear with the temperature outside*/

switch (true) {  /*creating a system to check the temperature outside and what outfit is approrpiate*/
  case 0:
    (idState = "NE" && weatherMes < 32) /*statement when nebraska weather is asked about*/
    break
  case 1:
    (idState = "NE" && 32 <= userTemperature <50)
    break;
  case 2:
    (idState = "FL" && 32 <= userTemperature <50) /*statement when florida weather is asked about*/
    break;
   case 3:
    (idState = "FL" && 50 <= userTemperature <70)
    break;
  default: 
    text = 'I do not have a suggestion for this temperature.' /*when the wrong weather and state is asked about*/ 
  }
    NSB.MsgBox(`${uppercaseLetterFirst}, ${weatherPrompt}`); /*to display all the messages at the end, with the name and temperature message*/