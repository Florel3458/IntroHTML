// JavaScript Document

/* 1. Output one element from an array.
In the given 'external-data' JavaScript file, create a basic array containing 6 barnyard animals of your choice. Be sure the HTML page connects to that file. Then put the event listener code for each button below in the script.js file.
Click me to output the second element from the barnyard animal array to the div 'output-1': */
document.getElementById('button-1').addEventListener('click',
function() {
    document.getElementById('output-1').innerHTML = barnyardAnimals[1];
});

/* 2. Simply loop a string (no array or JSON object involved). 
Use a 'for' loop for this one.
Click me to output a phrase of your choice ('Avengers assemble' for example) to the div 'output-2' below 100 times. Number each sequentially (1, 2, 3, etc.): */
let output = '';
document.getElementById('button-2').addEventListener('click',
function() {
    output = '';
    for(i = 1; i <= 100; i++) {
        output += '<p>';
        output += 'Long Live The King ' + i;
        output += '</p>';
    }
    document.getElementById('output-2').innerHTML = output;
});
/* 3. Simply loop an HTML image element (no array or JSON object involved).
Use a 'for' loop for this one. And use the 'icon1.png' image that's already in the images folder.
Click me to cause some HTML that displays the 'icon1' image to output to the div 'output-3' below 15 times: */
let child = document.createElement('img');
child.src = 'images/icon1.png';
document.getElementById('button-3').addEventListener('click',
function() {
    document.getElementById('output-3').innerHTML = '';
    for(i = 0; i < 15; i++) {
        document.getElementById('output-3').appendChild(child);
    }
});

/* 4. Output all elements from an array using a loop.
In the given 'external-data' JavaScript file, create another basic array containing 4 song titles of your choice.
Click me to output all the elements from the song title array to the div 'output-4' below, using a 'for' loop. In some way, cause a line break between each one: */
document.getElementById('button-4').addEventListener('click',
function() {
    output = '';
    for(i = 0; i < 4; i++) {
        output += '<p>';
        output += songTitles[i];
        output += '</p>';
    }
    document.getElementById('output-4').innerHTML = output;
});

/* 5. Add element to array, then output all elements from the array using a loop.
This one is just like the last one, but add the user's choice of song title to the array first...
Click me to add what the user typed in the input field to the Song Title array, then immediately empty the div 'output-5' below and then output all the elements from the song title array to div 'output-5' using a 'for' loop. Keep a line break between each one: */
let inputTitle = document.getElementById("input-title")
document.getElementById('button-5').addEventListener('click',
function() {
    output = '';
    if(inputTitle.value && !(songTitles.includes(inputTitle.value))) {
        songTitles.push(inputTitle.value)
    }
    for(i = 0; i < songTitles.length; i++) {
        output += '<p>';
        output += songTitles[i];
        output += '</p>';
    }
    document.getElementById('output-5').innerHTML = output;
});

/* 6. Output one element from a JSON object.
In the given 'external-data' JavaScript file, create a JSON object containing 4 products, giving each three key-value pairs (name, price, etc.).
Click me to output to the div 'output-6' below any one key-value pair's value (not the key) for any one product from the JSON object (for example, you might output the price value of product #2): */
document.getElementById('button-6').addEventListener('click',
function() {
    output = products.product3.price
    document.getElementById('output-6').innerHTML = output;
});
