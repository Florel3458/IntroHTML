// JavaScript Document
// alert("Hello world!");
/**
 * This method logs the result 
 * of 300 times 2
 */
function logDouble300() {
    console.log(300 * 2);
}

//call the function we just defined:
logDouble300();

/**
 * This method returns the result of 300 times 2
 * 
 * return   an integer, the mathematic result
 */
function double300() {
    return(300 * 2);
}

//call the function we just defined:
alert(double300());

// PARAMETERS / ARGUMENTS

/**
 * This method multiplies any number by two.
 * 
 * param    num     any number
 */
function doubleNum(num) {
    console.log(num * 2);
}

//call the function we just defined, passing in various arguments:
doubleNum(444);

//Start by thinking: WHAT PART SHOULD BE DIFFERENT EACH TIME THE FUNCTION EXECUTES? Replace that with a variable.


/**
 * This method alerts a compliment to any one 
 * person
 * 
 * param    person  string, someone's name
 */
function compliment(person) {
    alert(person + " is great")
}

//call the function we just defined, passing in various arguments:
compliment("Somebody");
compliment("Mado");
compliment("Mark");

/**
 * This method alerts a compliment to any one 
 * person, using any adjective
 * 
 * param    person  string, someone's name
 * param    adj     string, any adjective
 */

 function anyCompliment(person, adj) {
    alert(person + " is " + adj)
}

//call the function we just defined, passing in various arguments:
anyCompliment("Somebody", "nice");
anyCompliment("Mado", "tsuki");
anyCompliment("Mark", "mooey");
