/*
Author: Elizabeth Weisbrod
Date: Dec 14, 2021
File Name: script.js
*/

// Task 1
alert("My name is Elizabeth");
// Task 2
console.log("My favorite food is steak");
// Task 3 - 7
let favNumber = 4;
let isFalse = false;
let favMovie = "The Lion King";
let actor = "Jeremy Irons" // Long live the king
let bYear = 2001;
// Task 8 - 10
let total = 1115 + 305;
let aboutMe = "I was born in the year " + bYear + " and I like the movie " + favMovie + ".";
let myAge = "I am " + (new Date().getFullYear() - bYear) + " years old.";
// Task 11
function displayGrapesMessage() {
    alert("Y'know, grapes are alright but I love cherries");
}
// Task 12
function displayFavNumber() {
    alert("My favorite number is " + favNumber);
}
// Task 13
function logSomeMath() {
    console.log("200 - 123 = " + (200 - 123));
}
// Task 14
function logYear95() {
    console.log("I will turn 95 in the year " + (bYear + 95));
}
// Task 15
function displayMovie() {
    alert("The movie \"" + favMovie + "\" features " + actor + ".");
}
// Task 16
displayGrapesMessage();
displayFavNumber();
logSomeMath();
logYear95();
displayMovie();
// Task 17 - 18
function quarterHundred() {
    return(100 / 4);
}
alert("100 / 4 = " + quarterHundred());
