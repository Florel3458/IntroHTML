/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Elizabeth Weisbrod
      Date:   2021/11/02

      Filename: js02.js
 */

// declare global constants (we WANT an error if their value changes)
const EMP_COST = 100;     // photographer hourly rate
const BOOK_COST = 350;    // cost of memory book
const REPRO_COST = 1250;  // cost of reproduction rights
// TO DO #5: similarly, initialize a constant for travel cost per mile, initial value 2
const TRAVEL_COST = 2; //cost of travel per mile
// TO DO #2: call the function to setup the form when the page loads
setupForm();

function setupForm() {
      // set all form field values to defaults 
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      // TO DO #1: similarly, initialize photoRights and photoDist
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

      // TO DO #3: call function getEstimate 
      getEstimate();

      // TO DO #4: These 5 event handlers do the same thing, but let's try the different syntaxes available:
      // object property 
      document.getElementById("photoNum").onchange = getEstimate;

      // object property that runs an anonymous function
      document.getElementById("photoHrs").onchange = function() {
            getEstimate();// allows arguments
      }
      
      // event listener 
      document.getElementById("makeBook").addEventListener("change", getEstimate);

      // event listener that runs an anonymous function
      document.getElementById("photoRights").addEventListener("change", function() {
            getEstimate();// allows arguments
      });

      // event listener that runs several statements in an anonymous function
      document.getElementById("photoDist").addEventListener("change", function() {
            getEstimate();// allows arguments
            alert("This can speak! woah!")
      });
}
// estimate the total cost of the service
function getEstimate() {
      //alert('getEstimate is executing!'); //comment this out later

      // Declare a totalCost variable equal to the number zero
      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;

      // TO DO #7: similarly, declare a distance variable equal to the value of the input control with the id "photoDist".
      let distance = document.getElementById("photoDist").value;

      //store Boolean values: are the checkboxes checked? true or false
      let buyBook = document.getElementById("makeBook").checked;

      // TO DO #8: similarly, declare a buyRights variable equal to the 'checked' property of the input control with the id "photoRights".
      let buyRights = document.getElementById("photoRights").checked;

      // add to totalCost the cost of the photographers per hour 
      totalCost += photographers * hours * EMP_COST;
      // TO DO #9: similarly, add to totalCost the cost of travel
      // for the photographers
      totalCost += photographers * distance * TRAVEL_COST

      // add the cost of the book and/or rights IF purchased 
      totalCost += buyBook ? BOOK_COST : 0; //ternary

      // TO DO #10: similarly, use comparison/ternary operators to 
      // add to totalCost EITHER the repro cost OR zero, depending 
      // on whether buyRights is truthy or not:
      totalCost += buyRights ? REPRO_COST : 0;

      // TO DO #6: output total onto page: Set the innerHTML 
      // property for the element with the id "estimate" to the 
      // value of the total variable, and concatenate a dollar sign
      // to the left of that total:
      document.getElementById("estimate").innerHTML = "$" + totalCost;
      
}
