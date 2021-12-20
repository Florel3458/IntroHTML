// JavaScript Document
// alert("Hello world!");

// Task 1
let carName = "Mitsubishi";

// Task 2
alert("Welcome to the Function Argument activity!");

// Task 3
console.log("You ought to drive a " + carName);

// Task 4
console.log("22 * 400 = " + (22 * 400));

// Task 5
/**
 * A function that logs a sentence using
 * a number argument
 * 
 * param    no      any number
 */
function logNoSentence(no) {
    console.log(no + " is the chosen number!");
}
logNoSentence(3);
logNoSentence(1);
logNoSentence(4);

// Task 6
/**
 * A function that alerts a sentence using
 * the name of a car
 * 
 * param    carIn   string, a car name
 */
function alertCarSentence(carIn) {
    alert(carIn + " is a car I'd like to own!");
}
alertCarSentence("Toyota");
alertCarSentence("Honda");
alertCarSentence(carName);

// Task 7
/**
 * A function that logs the Hickory Dickory Dock
 * rhyme using two different words
 * 
 * param    word1   string, any word
 * param    word2   string, any word, rhymes with "dock"
 */
function logHDD(word1, word2) {
console.log("Hickory Dickory Dock  /  The " + word1 + " went up the " + word2);
}
logHDD("pick", "lock");
logHDD("truck", "block");
logHDD("croc", "loch");

// Task 8
/**
 * A function that logs the result
 * of adding two numbers together
 * which are given as parameters
 * 
 * param    no1     any number
 * param    no2     any number
 */
function addTwoNumbers(no1, no2) {
    console.log(no1 + " + " + no2 + " = " + (no1 + no2));
}
addTwoNumbers(1, 2);
addTwoNumbers(0, 1);
addTwoNumbers(2, 2);

// Task 9
/**
 * A function that returns the result
 * of multiplying a number by 3, which
 * can be used to convert yards to feet
 * 
 * param    numberOfYards   any number
 * return   a number, the mathematical result of numberOfYards * 3
 */
function convertYardsToFeet(numberOfYards) {
    return (numberOfYards + "yd = " + (numberOfYards * 3) + "ft");
}
console.log(convertYardsToFeet(10));
alert(convertYardsToFeet(42));
alert(convertYardsToFeet(window.prompt("Please enter a number of yards to be converted to feet.", "0")));
