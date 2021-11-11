/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Elizabeth Weisbrod
     Date:   2021 Nov 9

     Filename: js03.js
 */

//TO DO #1: Make an array named 'weekDays' storing strings of each day of the week:
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// while loop example goes here:
// call function addWeekDays when page loads
window.addEventListener("load", addWeekDays);

// Function to write weekday names into the calendar
function addWeekDays() {
   let i = 0; // initial counter value
   
   // reference the collection of heading cells in the table
   let headingCells = document.getElementsByTagName("th");
   
   // write each of the seven days into a heading cell
   while (i < 7) {
      headingCells[i].innerHTML = weekDays[i];
      
      // increase the counter by 1
      i++;
   }
}
//TO DO #2: call function showGames when page loads
window.addEventListener("load", showGames);
// Function to write game information into the calendar
function showGames() {
    alert("showGames function started")
	// TO DO #3: Make a for loop. Loop through elements in the gameDates array:
    for (let i = 0; i < gameDates.length; i++) {

		// TO DO #4: declare empty var that will end up holding a string with all the HTML to make a big paragraph
        let gameInfo = ""; //Hands-on does the same but calls it htmlCode
		// TO DO #5: First, just include an opening <p> tag.
		// TO DO #11: Later add SWITCH here to choose opening paragraph class. 
        switch (gameResults[i]) {
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='lose'>";
                break;
            case "S":
                gameInfo += "<p class='suspended'>";
                break;
            case "P":
                gameInfo += "<p class='postponed'>";
                break;
        }
		// TO DO #9: Later add IF/ELSE here to display the game location, adding "vs. " to gameInfo if a home game, otherwise adding "@ "
        if (gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a") {
            gameInfo += "@ ";
        }
		// TO DO #6: Include the opponent
        gameInfo += gameOpponents[i] + "<br>";
		// Include the result and score
		gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

		// TO DO #10: Later add IF/ELSE here to display innings played for suspended, shortened, or extra-inning games. 
		// For games suspended prior to the fifth inning, add to gameInfo the inning enclosed in brackets followed by three asterisks, such as [4]***
		// For shortened games in which the result is still final, add to gameInfo the inning enclosed in brackets followed by an asterisk, such as [7]*
		// For extra-inning games, add to gameInfo the innings enclosed in brackets, such as [11]
		// For nine-inning games, do not add to gameInfo the innings played
        if (gameInnings[i] < 5) {
			gameInfo += " [" + gameInnings[i] + "]***";
        } else if (gameInnings[i] < 9) {
			gameInfo += " [" + gameInnings[i] + "]*";
        } else if (gameInnings[i] > 9) {
			gameInfo += " [" + gameInnings[i] + "]";
        }
		// TO DO #7: Include closing paragraph tag
		gameInfo += "</p>";
		// TO DO #8: Output the information into a table cell

		// First make a var referencing where to display all the text: it'll be a <td> referenced by its id, But since we'll pull the date value from the gameDates array, and i will be different each time this loop runs, it'll be a different <td> each time this loop runs.
		let tableCell = document.getElementById(gameDates[i]);
		// Then put the big string of info that gameInfo var is holding into the <td> right before the closing </td>
		tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
	}
}
