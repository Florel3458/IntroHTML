/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
    Filename: scripts.js
    Written by: Elizabeth Weisbrod
\*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function rollStats() {
    var rolls = 1;
    var d1;
    var d2;
    var d3;
    var d4;
    var lowest;
    var total;
    var alltotal = 0;

    while (rolls <= 6) {
        // roll 4d6 and find the lowest roll
        d1 = Math.random() * 6 + 1;
        d1 = Math.trunc(d1);
        d2 = Math.random() * 6 + 1;
        d2 = Math.trunc(d2);
        d3 = Math.random() * 6 + 1;
        d3 = Math.trunc(d3);
        d4 = Math.random() * 6 + 1;
        d4 = Math.trunc(d4);
        lowest = (Math.min(d1, d2, d3, d4));

        // drop the lowest roll
        if (d1 == lowest) {
            d1 = 0;
        } else if (d2 == lowest) {
            d2 = 0;
        } else if (d3 == lowest) {
            d3 = 0;
        } else d4 = 0;

        // put the total into text
        total = d1 + d2 + d3 + d4;
        if (total <= 9) {
            document.getElementById("statRoll" + rolls).innerHTML = "＜0" + total + "＞";
        } else document.getElementById("statRoll" + rolls).innerHTML = "＜" + total + "＞";

        // get the total of all rolls
        alltotal += total;
        rolls += 1;
        /*
        alert (alltotal);
        alert (rolls);
        */
    }
    // add flavor text..... so much if/else is probably super inefficient but...
    document.getElementById("rollTotal").innerHTML = "Your total is " + alltotal + "..."
    if (alltotal >= 90) {
        document.getElementById("rollFlavor").innerHTML = "An extremely good roll!!!";
    } else if (alltotal >= 82) {
        document.getElementById("rollFlavor").innerHTML = "A very good roll!!";
    } else if (alltotal >= 70) {
        document.getElementById("rollFlavor").innerHTML = "A nice roll!";
    } else if (alltotal >= 64) {
        document.getElementById("rollFlavor").innerHTML = "An okay roll.";
    } else if (alltotal >= 55) {
        document.getElementById("rollFlavor").innerHTML = "Might be a bit low.";
    } else document.getElementById("rollFlavor").innerHTML = "Yikes...";
}
