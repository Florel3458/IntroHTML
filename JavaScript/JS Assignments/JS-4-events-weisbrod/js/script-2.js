// JavaScript Document
//Code the js/script-2.js file to complete the tasks below. Do not alter the HTML in the body, and do not alter the CSS document.

// 10. When the user clicks the "Donate" button, alert the message "Including a $5 service charge, please mail us a check for" followed by the amount they typed increased by 5.
document.getElementById("amount-submit").addEventListener("click",
function() {
    let inputValue = document.getElementById("input-amount").value;

    if(inputValue && inputValue >= 0) {
        let checkAmount = parseInt(inputValue) + 5;

        alert("Including a $5 service charge, please mail us a check for $" + checkAmount);
/******************************* Extra Credit Code *******************************/
        let newEmo = document.createElement("option");

        newEmo.innerHTML = inputValue;
        emoInput.appendChild(newEmo);
/******************************* Extra Credit Code *******************************/
    } else {
        alert("Please input a number in the field");
    }
});

// 11. Depending on the selection the user makes from the emotion select element, color the background of the select element differently. For example, if they choose "sad" in the select element, color the background of the select element blue. 
let emoInput = document.getElementById("input-emo");

emoInput.addEventListener("change",
function() {
    switch(emoInput.value) {
        case "happy":
            emoInput.style.backgroundColor = "PaleGoldenRod";
            break;
        case "sad":
            emoInput.style.backgroundColor = "CornflowerBlue";
            break;
        case "curious":
            emoInput.style.backgroundColor = "Orchid";
            break;
    }
});

// 12. Notice the "Prove you're not a robot" form has an action that sends the browser back to the index page when submitted. Whenever the user clicks "Submit this form", if the value in the password field is lower than 123, log the message "too low" in the console but DO NOT let the form submit. And if they enter a number higher than 123, log "too high" in the console but DO NOT let the form submit. But if they enter the value 123, let the form submit. 
let inputUserNum = document.getElementById("input-usernum");

function roboSubmit(event) {
    if(inputUserNum.value < 123) {
        event.preventDefault();
        console.log("too low");
    } else if(inputUserNum.value > 123) {
        event.preventDefault();
        console.log("too high");
    }
}
document.getElementById("form-3").addEventListener("submit",
function(event) {
    roboSubmit(event);
});

// EXTRA CREDIT: Add code to the event listener for the Donate button so that clicking the Donate button also takes what the user typed in the amount input field and makes it into another option in the emotion select dropdown. Each repeated click on the Donate button should add yet another option to the emotion dropdown.
