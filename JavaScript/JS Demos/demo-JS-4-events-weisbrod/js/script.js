// JavaScript Document
/* EVENTS */

// Functions that will be called in response to events:
function celticFeedback() {
    //we could also change things in the DOM:
    document.getElementById("feedback").innerHTML = "Sure and it's a *foin* sound!";
    //...and change their styling...
    document.getElementById("feedback").style.backgroundColor = "#00cc00";
}
function jazzFeedback() {
    document.getElementById("feedback").innerHTML = "That's a cool choice, you crazy cat!";
    document.getElementById("feedback").style.backgroundColor = "#00cccc";
}

    //display: none; is the CSS to hide an element

// Event Listeners
//if and when first link is clicked, call one feedback function above
document.getElementsByTagName("a")[0].addEventListener("click", celticFeedback);
//if and when second link is clicked, call the other feedback function
document.getElementsByTagName("a")[1].addEventListener("click", jazzFeedback);

//HOW TO USE EVENTS AND ARGUMENTS
/**
 * This method changes the text color
 * of the feedback box to blue
 * 
 * @param   whichColor  a CSS color value
 */
function changeTextColor(whichColor) {
    document.getElementById("feedback").style.color = whichColor;
}

// Pass argument where event handler calls the function, using an anonymous function:
// if and when first link is clicked, call changeTextColor function but pass in an ARGUMENT
document.getElementsByTagName("a")[2].addEventListener("click",
function() {
    changeTextColor("red");
});

//if and when second link is hovered over, call changeTextColor function but pass in DIFFERENT ARGUMENT
document.getElementsByTagName("a")[3].addEventListener("mouseover",
function() {
    changeTextColor("green");
});

//CONDITIONAL STRUCTURES (IF)
//function that gets that the user typed in the field. Has to happen after user clicks "Done"
function checkColor() {
    let favColor = document.getElementById("input-color").value;
    //a single equals assigns a new value, kicking out the old value "red"
    //A === checks the value, rather than assigning it. A conditional statement checks whether the comparison in ( ) is true or false. If true, it does the code in { }. If false, it skips past the code in { }
    if(favColor === "red") {
        //this log will only happen if favColor is red:
        console.log("You must like fire engines");

        //we CAN afterward add an ‘ELSE IF’ after the curly closes, which has its own condition that ONLY gets checked if the first ‘if’ condition was false
    } else if(favColor === "blue") {
        //this log will only happen if favColor is blue:
        console.log("You must like the ocean");
    } else if(favColor === "yellow") {
        //this log will only happen if favColor is yellow:
        console.log("You must like the sun");

        //an ‘ELSE’ clause can end the structure. It does not get its own condition in ( ). It just does the code in its { } if NONE of the preceding ‘IF’s and ‘ELSE if's conditions were true

        //In the conditions, we can use COMPARISON OPERATORS to compare 'less than' and 'greater than' instead of ===
    } else if(favColor < 0) {
        console.log("That's a negative number.");
    } else if(favColor >= 0) {
        console.log("That's a positive number. If we add 100 to it, we get " + (Number(favColor) + 100));
    } else {
        //a default message
        console.log("Oh, that's a nice color");
    }
} //close function checkColor
//event handler: user clicks "Done"
document.getElementById("done-button").addEventListener("click", checkColor);

//function that gets what the user chose in the select dropdown
function checkColorSelect() {
    let favColor = document.getElementById("select-color").value;
    //a single equals assigns a new value, kicking out the old value "red"
    //A === checks the value, rather than assigning it. A conditional statement checks whether the comparison in ( ) is true or false. If true, it does the code in { }. If false, it skips past the code in { }
    if(favColor === "red") {
        //this log will only happen if favColor is red:
        console.log("You must like fire engines");

        //we CAN afterward add an ‘ELSE IF’ after the curly closes, which has its own condition that ONLY gets checked if the first ‘if’ condition was false
    } else if(favColor === "blue") {
        //this log will only happen if favColor is blue:
        console.log("You must like the ocean");

        //an ‘ELSE’ clause can end the structure. It does not get its own condition in ( ). It just does the code in its { } if NONE of the preceding ‘IF’s and ‘ELSE if's conditions were true
    } else {
        //this log will only happen if favColor is yellow:
        console.log("You must like the sun");
    }
} //close function checkColorSelect
//event handler: user changes color selection
document.getElementById("select-color").addEventListener("change", checkColorSelect);

/* Preventing Form Submission if input is invalid */
// To submit the form: document.getElementById("my-form").submit(); 
// BUT... that happens without us coding it. Here, we might need to STOP submission...
//We will VALIDATE: Add a condition in case they left it blank. If so, prevent form from submitting and show feedback. 

function shoeSubmit(event) {
    //store var of what user typed in field
    let ssize = document.getElementById("input-ssize").value;
    if(!ssize) { //true if empty. Also works to say: if(ssize === "")
        event.preventDefault() //stops the submission. Display feedback:
        document.getElementById("ssize-feedback").innerHTML = "You must enter a shoe size first"
    }
}

//Note how we pass the event object in several places in the listener:
document.getElementById("my-form").addEventListener("submit",
function(event) {
    shoeSubmit(event);
});
