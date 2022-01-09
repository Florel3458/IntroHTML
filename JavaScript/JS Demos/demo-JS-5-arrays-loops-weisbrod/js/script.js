// JavaScript Document

//We know what a variable is. At top of document, we list var's we intend to use
//let student1 = "Tyler";
//let student2 = "David";

//They're related, right? Instead of having separate variables for related values like student names, we should put them into a BASIC ARRAY. An array is a var that stores multiple values...

//BASIC ARRAY
let studentArray = ["Tyler", "David", "Will"];
//to refer to one element in the array, mention the array's name, then the index number in brackets (numbering goes 0, 1, 2, etc.):
console.log(studentArray[0]);
//to assign a value to it, mention the index number in brackets:
studentArray[3] = "Sergei";
studentArray[4] = "Jesse";

//if we later assign a new value to an index # that already has a value, the old value is gone
studentArray[0] = "Josh";

//the values inside an array can be different types (other languages might object):
//let customerArray = ["Ally", 21, true];

//We'll create our customer array in a separate document named "external-data.js" since often we'll get data from outside our script, such as from an API   

//Output the contents of the array when something is clicked (In your assignment, make the arrays OUTside the function, and build strings INSIDE the function):
function outputCustomer() {
    //Let's BUILD AN OUTPUT STRING involving the array values and some HTML
    //document.getElementById("output-1").innerHTML = customerArray; Works, but it ain't pretty. First, we'll make a var to store the entire string:
    let htmlString1; 
    htmlString1 = "<p>";
    htmlString1 += customerArray[0]; //MUST use PLUS-EQUALS for lines that follow
    htmlString1 += "</p>";
    htmlString1 += "<p>";
    htmlString1 += customerArray[1];
    htmlString1 += "</p>";
    htmlString1 += "<p>";
    htmlString1 += customerArray[2];
    htmlString1 += "</p>";

    //now copy that long string of code into the innerHTML of the div:
    document.getElementById("output-1").innerHTML = htmlString1;

}
document.getElementById("button-1").addEventListener("click", outputCustomer); 


/* Loops: */
// Notice above we repeat the creation of a P tag, the adding of a value, then the closing of the P tag. There are nice code structures designed to repeat the same code over and over with only a few lines of code. Let's learn the 'for' loop. As out first example, we’re going to make a loop to output the same word ‘Hi” over and over. 
function outputHi () {
    // build an output string:
    let msg = ''; //otherwise outputs 'undefined'
    /****  FOR loop  ****/
    //Any good loop needs:
    //a counter. This is a variable that keeps track of how many times we've done what's in { }
    //code that changes the counter after each time the { } run. So it counts 0, 1, 2, 3, 4, etc
    //a condition that tells it to loop as long as this condition is true
    for(let i = 0; i < 10; i++) {
        msg += "Hi" + i + "<br>";
    }
    //put string onto the page:
    document.getElementById("output-2").innerHTML = msg;
}
document.getElementById("button-2").addEventListener("click", outputHi); 



function custArrayOutput () {
    // build an output string:
    let msgCust = '';
    for(let i = 0; i < 3; i++) {
        msgCust += "<p>";
        msgCust += customerArray[i];
        msgCust += "</p>";
    }

    //put string onto the page:
    document.getElementById("output-3").innerHTML = msgCust;
}
document.getElementById("button-3").addEventListener("click", custArrayOutput); 

function custArrayAddOutput () {
    // push adds a new value at the end of the array
    customerArray.push("green");
    customerArray.push("medium");
    // build an output string:
    let msgCust = '';
    // We can use arrayName.length property to get a number that's how many elements in the array...
    let numberOfElementsInTheArray = customerArray.length;
    msgCust += "<ul>"
    for(let i = 0; i < numberOfElementsInTheArray; i++) {
        msgCust += "<li>";
        msgCust += customerArray[i];
        msgCust += "</li>";
    }
    msgCust += "</ul>"

    //put string onto the page:
    document.getElementById("output-4").innerHTML = msgCust;
}
document.getElementById("button-4").addEventListener("click", custArrayAddOutput); 


    
    



/* JSON */
// Get certain values from the JSON in external-data.js. Tell them in the assignment they need to get the values onto the page in response to a button click
// we can use dot syntax notation to mention the correct "keys":
console.log(customerJSON.customer1.firstName);
// or say the keys in brackets and quotes:
console.log(customerJSON["customer1"]["firstName"]);

