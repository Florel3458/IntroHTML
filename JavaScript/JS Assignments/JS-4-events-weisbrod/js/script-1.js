// JavaScript Document
//Code the js/script-1.js file so the blue buttons below do what they say they will. Do not alter the HTML in the body, and do not alter the CSS document.

// 1. Click me to show "You clicked button 1" in an alert box 
document.getElementById("button-1").onclick = function() {
    alert("You clicked button 1");
}

// 2. Hover over me to change item C. in the Summer To-Do List to say a different phrase. (It can stay that way permanently) 
let parentToDoList = document.getElementsByTagName("ol")[1];

document.getElementById("button-2").onmouseover = function() {
    parentToDoList.getElementsByTagName("li")[2].innerHTML = "Discover something that doesn't exist";
}

// 3. Click me to give the class "yikes" to item D in the Summer To-Do List. It will end up looking very yellow! 
document.getElementById("button-3").onclick = function() {
    parentToDoList.getElementsByTagName("li")[3].className = "yikes";
}

// 4. Click me to change any two style properties for the Skiing item in the Summer To-Do List so it looks really special 
document.getElementsByTagName("button")[3].onclick = function() {
    parentToDoList.getElementsByTagName("li")[4].style.color = "red";
    parentToDoList.getElementsByTagName("li")[4].style.backgroundColor = "green";
}

// 5. Click me to make the two suns at top of page go away (display:none) 
document.getElementsByTagName("button")[4].onclick = function() {
    for(i = 0; i < 2; i++) {
        document.getElementsByTagName("img")[i].style.display = "none";
    }
}

// 6. Click me to make the two suns reappear 
document.getElementsByTagName("button")[5].onclick = function() {
    for(i = 0; i < 2; i++) {
        document.getElementsByTagName("img")[i].style.display = "block";
    }
}

// 7. Click me to add to the Summer To-Do List an HTML list item that says "Earn some money" 
let listItem1 = document.createElement("li");

listItem1.innerHTML = "Earn some money";
document.getElementsByTagName("button")[6].addEventListener("click",
function() {
    addListItem(1)
});

// 8. Click me to add to the Summer To-Do List an HTML list item that says "Go Zip Lining" 
let listItem2 = document.createElement("li");

listItem2.innerHTML = "Go Zip Lining";
document.getElementsByTagName("button")[7].addEventListener("click",
function() {
    addListItem(2)
});

// Task 9: Make buttons 7 and 8 above call the SAME function but customize how it works using parameters/arguments.
function addListItem(itemNumber) {
    switch(itemNumber) {
        case 1:
            parentToDoList.appendChild(listItem1);
            break;
        case 2:
            parentToDoList.appendChild(listItem2);
            break;    
    }
}
// Done coding the index page? Move on to dcode script-2.js...