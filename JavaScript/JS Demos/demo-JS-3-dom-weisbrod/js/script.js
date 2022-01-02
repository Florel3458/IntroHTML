/* Manipulating the DOM of our HTML page */

// document.write("Hi!");


/* Part 2: GETTING VALUES FROM THE DOM  */
//Let's learn to GET and SET the text of any HTML element on our page
//Here, we'll target a specific HTML text tag’s text by mentioning its ID in ():
document.getElementById("slogan").innerHTML;

//Can do tags, too. This GETS the contents of a certain tag, targeting it by its tag name.  Note the plural s and the number in brackets, because there may be more than one.
document.getElementsByTagName("p")[1].innerHTML;
//Here, we'll GET the contents of a certain item with 'great' class, targeting it by its class name.  Note the plural s and the number in brackets, because there may be more than one.
document.getElementsByClassName("great")[1].innerHTML;
//Nothing results from the above code. We need to DO something, like display the results we GET:
// Count from 0 like this: 0, 1, 2, 3, etc
console.log(document.getElementsByTagName("p")[0].innerHTML);
//...or store the results in a var, for later use:
// Count from 0 like this: 0, 1, 2, 3, etc
let storedText = document.getElementsByTagName("p")[0].textContent;

/* Part 3: SETTING VALUES IN THE DOM */
//Above we GET the current value. We can also SET it to a new value:
//Target your first <p> tag by its tag name and SET its HTML to a new value:
document.getElementsByTagName("p")[0].innerHTML = document.getElementById("slogan").innerHTML;

/* Part 4: CHANGING THE CSS STYLING WITH JS */
//We can also SET a CSS style property of an element like this:
//Target your second <p> tag by its tag name and alter its style, giving it a red text color
document.getElementsByTagName("p")[1].style.color = "#ff0000";
//If the CSS property would get a hyphen, remove the hyphen and camelCase instead:
document.getElementsByTagName("p")[1].style.fontSize = "3rem";

/* Part 5: CHANGING HTML TAG ATTRIBUTE VALUES WITH JS */
//Recall that opening HTML tags often have attributes like href, src, alt, class, and id. In the tag <img src="temp.png" alt="#">, for example, src and alt are attributes. In JS you can change their values using dot syntax: object.attribute = newValue. (And if the tag didn't have that attribute before, it will now!)
// Set the src attribute of the img tag to a new value: 
document.getElementsByTagName("img")[0].src = "images/error.jpg";

// Set the value attribute of the input tag to a new value (innerHTML doesn't work on a form element!): 
document.getElementById("input-uname").value = "Some text for the form field";

//Caution: you might expect to be able to set "class" in the same way, but you have to say "className": 
 //Note the style in the CSS doc called fiery
document.getElementsByTagName("p")[2].className = "fiery";

/* Part 6: REMOVE or CREATE ANY HTML ELEMENT (TAG) */
//Syntax: parent.removeChild(child);
//Remove the image from the web page:
document.getElementsByClassName("container")[0].removeChild(document.getElementsByTagName("img")[0]);

//Here, we'll add a new <p> to the <div>
//Set up a var for the parent. (What new tag will go inside of)
let parentDiv = document.getElementsByClassName("container")[0];
//the next line creates any HTML tag we want, but it's not attached to the doc yet
let childP = document.createElement("p");
//lastly, you must attach the child inside its parent
parentDiv.appendChild(childP);

//If necessary, fill the new element with text, style it, attach classes... THIS IS WHY WE MADE IT A VAR!!!
childP.innerHTML = "new paragraph!";

//On your own, try to do this EXAMPLE 2: Let's add the image of the temp.png to the body (it will appearbelow the div). After a time, I'll give you the answer
let parentBody = document.body; //special short ref for body
let childImg = document.createElement("img");
childImg.src = "images/temp.png";
childImg.style.width = "100%";
parentBody.appendChild(childImg);
