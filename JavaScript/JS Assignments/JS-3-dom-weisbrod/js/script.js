// You are not allowed to further alter the code in the HTML or CSS files by hand during this assignment... you may NOT add classes, etc.
// Create all of the JavaScript code specified IN ORDER:


/* Part 2: Getting values from the DOM */

// 1.	GET the HTML that's inside the <h1> tag to appear in an alert box. You may not literally have the words "My Favorite Quotes" in your code; reference the DOM.
alert(document.getElementsByTagName("h1")[0].innerHTML);
// 2.	GET the HTML that's inside the second <p> tag to log to the console. You may not literally have the words "Second quote" in your code; reference the DOM.
console.log(document.getElementsByTagName("p")[1].innerHTML);

/* Part 3: Setting values in the DOM */

// 3.	Target your first <p> tag by its ID and SET its HTML to "An apple a day keeps the doctor away"
document.getElementById("quote1").innerHTML = "An apple a day keeps the doctor away";
// 4.	Target your second <p> tag by its ID and SET its HTML to "My teacher is awesome"
document.getElementById("quote2").innerHTML = "My teacher is awesome";
// 5.	Target your third <p> tag by its ID and SET its HTML to "He made me write that last one"
document.getElementById("quote3").innerHTML = "He made me write that last one";
// 6.	Target your fourth <p> tag by its tag name and SET its HTML to a quote you like
document.getElementsByTagName("p")[3].innerHTML = "But not this one";
// 7.	Target your fifth <p> tag by its tag name and SET its HTML to a quote you like
document.getElementsByTagName("p")[4].innerHTML = "mwahaha";
// 8.	Target your sixth <p> tag by its class and SET its HTML to a quote you like
document.getElementsByClassName("more-quotes")[0].innerHTML = "I'm running out of things to say";
// 9.	Target your seventh <p> tag by its class and SET its HTML to a quote you like
document.getElementsByClassName("more-quotes")[1].innerHTML = "Long Live the King";

/* Part 4: Changing the CSS Styling with JS */
// 10.	Targeting your first <p> tag by its tag name, alter its style, giving it a green text color.
document.getElementsByTagName("p")[0].style.color = "green";
// 11.	Targeting your second <p> tag by its ID, alter its style, giving it a brown background color.
document.getElementById("quote2").style.backgroundColor = "brown";
// 12.	Targeting your seventh <p> tag by its class, alter its style, giving it a bold font weight.
document.getElementsByClassName("more-quotes")[1].style.fontWeight = "bold";

/* Part 5: Changing HTML Tag Attribute Values with JS */

// 13.	Set the src attribute of the img tag to show the moon image that's in the images folder. 
document.getElementsByTagName("img")[0].src = "images/moon.png";
// 14.	Set the value of the "City" input tag in the form to "Oakdale".
document.getElementById("input-city").value = "Oakdale";
// 15.	Set the placeholder attribute of the "Zip code" input tag in the form to "Ex: 54321".
document.getElementById("input-zip").placeholder = 15236;
// 16.	Assign your <h1> tag the "more-quotes" class so it gets the black border.
document.getElementsByTagName("h1")[0].className = "more-quotes";

/* Part 6: Remove or Create an HTML Element (Tag) with JS */
// 17.	Remove the horizontal rule (hr tag) from the form:
let parentForm = document.getElementsByTagName("form")[0];
let childHR = document.getElementsByTagName("hr")[0];
parentForm.removeChild(childHR);
// 18.	Use createElement to add a <p> tag element to the form (it will appear at the bottom). Make it contain the text "* denotes required field".
let childP1 = document.createElement("p");
childP1.textContent = "* denotes required field"
parentForm.appendChild(childP1);

/* EXTRA CREDIT: Overlay Panel */
// Use createElement to add a div tag element to the body (it will appear at the bottom).
let childDiv = document.createElement("div");
// Use createElement to add some text and other HTML elements of your choice inside it.
let childP2 = document.createElement("p");
let childImg = document.createElement("img");
let childButton = document.createElement("button");
let buttonDivSpawner = document.createElement("button");
childP2.innerHTML = "<strong>Long Live the King</strong>"
childImg.src = "images/be-prepared.jpeg";
childButton.innerHTML = "Long Live the King";
childButton.onclick = function() {longLiveTheKing()};
buttonDivSpawner.innerHTML = "Button to spawn the div since it's kinda in the way otherwise and what it does is fun but will make you have to refresh the page and I'm just typing extra text blahblah";
buttonDivSpawner.onclick = function() {spawnDiv()};

// Use JS (you may not change the CSS file) to give the div a CSS background-color of your choice, and the following CSS:   width: 50vw;   position: absolute;              top: 75px;                        left: 25vw;                      box-sizing: border-box;      box-shadow: 3px 3px 10px rgba(0,0,0, 0.4);
// Use JS to give the div and the elements inside it nice CSS styling that looks good on all screen sizes. Make it seem like a popup overlay window that serves a useful purpose.
childDiv.style.display = "none";
childDiv.style.backgroundColor = "CornflowerBlue";
childDiv.style.width = "50vw";
childDiv.style.position = "absolute";
childDiv.style.top = "75px";
childDiv.style.left = "25vw";
childDiv.style.boxSizing = "border-box";
childDiv.style.boxShadow = "3px 3px 10px rgba(0,0,0, 0.4)";
childP2.style.textAlign = "center";
childP2.style.color = "white";
childImg.style.maxWidth = "98%";
childImg.style.margin = "0 auto";
childImg.style.display = "block";
childButton.style.margin = "0 auto";
childButton.style.display = "block";
childButton.style.color = "Red";
childButton.style.cursor = "pointer";
buttonDivSpawner.style.cursor = "pointer";

document.body.appendChild(buttonDivSpawner);
childDiv.appendChild(childP2);
childDiv.appendChild(childImg);
childDiv.appendChild(childButton);
document.body.appendChild(childDiv);

function longLiveTheKing() {
    childDiv.style.display = "none";
    document.getElementsByTagName("h1")[0].textContent = "Long Live the King";
    document.getElementById("quote1").textContent = "Long Live the King";
    document.getElementById("quote2").textContent = "Long Live the King";
    document.getElementById("quote3").textContent = "Long Live the King";
    document.getElementsByTagName("p")[3].textContent = "Long Live the King";
    document.getElementsByTagName("p")[4].textContent = "Long Live the King";
    document.getElementsByTagName("p")[5].textContent = "Long Live the King";
    document.getElementById("input-city").value = "Pride Rock";
    document.getElementsByTagName("img")[0].src = "images/simba-symbol.jpg";
}

function spawnDiv() {
    childDiv.style.display = "block";
    buttonDivSpawner.style.display = "none";
}
