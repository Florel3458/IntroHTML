// JavaScript Document
// 1. Basic COMMANDS (INSTRUCTIONS/STATEMENTS) - no variables needed here
// This is a command (or statement, or instruction) to cause something to happen. Finish each with a semicolon
// This command or instruction causes what's in () to pop up in a little box
window.alert("Womp womp");
// This command or instruction causes what's in () to appear in the browser's console 
console.log("Wumpus woo");

// 2. VARIABLES
// Variables are containers that store values you want the code to remember. WITHOUT some kind of mechanism like this, browsers don’t remember choices the user makes! Some values are string literal values (combination of letters, numbers, punctuation, spaces, anything). Those values get quotes. 
// Declare a variable named user with an initial string value that's someone’s name.
let user = "Elizabeth";
// Don’t put spaces in variable names or start with a number. Underscore is the only punctuation you can use. Good to use camelCase —capitalizeEachWordExceptTheFirst
// Declare a variable with an initial numeric value. Those values don't get quotes.
let score = 0;
let lives = 3;
let hitPoints = 100;
let job = "magician";
let money = 60.26;

// Note: when storing a price or big number, don’t add $ or comma: 654329
// Declare a variable with an initial boolean value. There are only two possible boolean values: true or false. They look like strings, but don’t add quotes!
let isVisible = true;

//Test in a browser. Nothing happens. But you can rt-click > Inspect, open console and type in a var name and hit Enter. Its value appears.

// Now that some variables were initialized, we can refer to them again and again, but you don't ever say ‘let’ again for them. We can output a var by mentioning it in console.log() or alert(). 
console.log(job);
console.log(money);

console.log("job");//wrong! Don't put quotes around the var.
// Later the value might change. Here we use a single equals sign to ASSIGN a new value. The variable forgets any value it had before.
job = "witch";
money = 10000;
console.log(job);
console.log(money);


// 3. CONCATENATION AND MATH
// If we want to output more than one var... use a + between them to concatenate. I might want to add in some words, or spaces... put them in quotes, and concatenate! 
alert(user + " is cool");
// Declare a variable named myCharacter that creates the sentence "Joe is my name and my job is magician" where the name and job are retrieved using the variables you made above.
let myCharacter = user + " is my name and my job is " + job;
alert(myCharacter);

console.log(444); // 死
// Using the PLUS operator on numbers makes the browser do the math. 
// Declare a variable named addThem that stores the numeric result of the operation 444 + 2. Make the browser do the math instead of you.
let addThem = 444 + 2;
//Other math operators are possible:
let subtractThem = 444 - 2;
let multiplyThem = 444 * 2;
let divideThem = 444 / 2;
// In your operation you can mention a var that stores a number, and the code performs math on it.
// Display the mathematical result of subtracting 5 from your health variable:
console.log(hitPoints - 5);
// Declare a variable named doubleMyMoney with an initial value that's the numeric result of the operation of multiplying your money variable by two.
let doubleMyMoney = money * 2;
// Declare a variable with an initial value that's the numeric result of the operation of adding one to your lives variable 
let oneUp = lives + 1;

// Declare a variable named mathSentence that creates the sentence "The total of 4 plus 2 is 6" where the number is calculated by adding four plus two. First show the problem if you don't add parentheses, and check in browser. Then add parentheses around an operation to make the code do it first.
let mathSentence = "The total of 4 plus 2 is " + (4 + 2);
// Declare a variable named healthSentence that creates the sentence "The total of 4 plus the health variable is 104" where the number is calculated by adding four plus your health variable. 
let healthSentence = "The total of 4 plus the health variable is " + (hitPoints + 4);

// 4. FUNCTIONS (methods)
// The above instructions are executed right away, in order. But now we’ll expand our abilities to control the timing of execution. By wrapping code in a function, it doesn’t execute yet. 
// A function or method is a set of commands we can call upon by a short name we choose
// Define a function named doStuff that contains an instruction to display the string "Do you see this message?" in a popup alert box, then another an instruction to display through the console window the string "Do you see this text?"
function doStuff() {
    alert("Do you see this message?");
    console.log("Do you see this text?");
}

//nothing happens when we refresh the browser, right? In a browser, find the type-in prompt and type in "doStuff()". It appears! In future weeks, this will let us control the timing of when things happen. We could also call it in our code, before OR after we define the function:
// Add a statement which calls the function you just defined.
doStuff();

// Define a function that contains a command that displays in the console the sentence "Joe is my name and my job is magician" where the name and job are retrieved using the variables you made above.
function showStats() {
    console.log(user + " is my name and my job is " + job);
}

// Add a statement which calls the function you just defined.
showStats();

// Mention scope – var’s declared inside the {} of a function can only be called inside that function.
// With these old-school "callback functions," timing-wise, when JS code is read by the browser, the function definitions are read first, then the rest of the code is executed. This is called HOISTING. For that reason, we could call functions BEFORE they are defined! Still, I would tend to define them all near top of page. With newer fat-arrow syntax, you MUST DEFINE BEFORE YOU CALL OR YOU GET AN ERROR!  

// 5. RETURN
// Instead of logging or alerting inside the code block of a function, we can have the answer get "returned"
// Define a function named doMyMath() that multiplies the number 4.99 by the number 2 then returns the answer. It should not output anything.
function doMyMath() {
    return (4.99 * 2);
}

// Where does it return to? Wherever we call the function.
doMyMath();
// So the phrase doMyMath() sort of BECOMES the returned answer. That in itself doesn't cause the answer to be displayed or anything. Wrap it in log() or alert():  
// Call the function you just defined. Get the returned value to display in an alert box or a console log, or store it in a var:
console.log(doMyMath());
alert(doMyMath());
// Count those nested parentheses… be sure each one that opens also closes. 

