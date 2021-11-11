/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
    Filename: scripts.js
    Written by: Elizabeth Weisbrod
\*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function rollStats() {
    var d1;
    var d2;
    var d3;
    var d4;
    var lowest;
    var total;
    var allTotal = 0;
    var highRolls = 0;

    // loop that runs 6 times
    for (let i = 1; i <= 6; i++) {
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

        // drop the lowest roll only once
        if (d1 == lowest) {
            d1 = 0;
        } else if (d2 == lowest) {
            d2 = 0;
        } else if (d3 == lowest) {
            d3 = 0;
        } else d4 = 0;

        // put the total into text
        total = d1 + d2 + d3 + d4;

        // if the total is a single digit, adds a 0 before it (eg. "＜06＞")
        // if the total is an 18, adds a fancy border (eg. "*＊＜18＞＊*") and adds 2 to highRolls
        // if the total is at least 15, denotes it with asterisks (eg. "＊＜16＞＊")
        if (total <= 9) {
            document.getElementById("statRoll" + i).innerHTML = "＜0" + total + "＞";
        } else if (total == 18) {
            document.getElementById("statRoll" + i).innerHTML = "*＊＜" + total + "＞＊*";
            highRolls += 2
        } else if (total >= 15) {
            document.getElementById("statRoll" + i).innerHTML = "＊＜" + total + "＞＊";
            highRolls++
        } else document.getElementById("statRoll" + i).innerHTML = "＜" + total + "＞";

        // add up the full total
        allTotal += total;

        // alert (allTotal);
        // alert (i);
        // alert (highRolls);

    } // end of loop
    // add total and flavor text
    document.getElementById("rollTotal").innerHTML = "Your total is " + allTotal + "..."
    if (allTotal >= 90) {
        document.getElementById("rollFlavor").innerHTML = "An extremely good roll!!!";
    } else if (allTotal >= 82) {
        document.getElementById("rollFlavor").innerHTML = "A very good roll!!";
    } else if (allTotal >= 70) {
        document.getElementById("rollFlavor").innerHTML = "A nice roll!";
    } else if (allTotal >= 64) {
        document.getElementById("rollFlavor").innerHTML = "An okay roll.";
    } else if (allTotal >= 55) {
        document.getElementById("rollFlavor").innerHTML = "Could be a bit low.";
    } else document.getElementById("rollFlavor").innerHTML = "Yikes...";
    /*
    108 - 90 = extremely good
    89  - 82 = very good
    81  - 70 = nice
    69  - 64 = okay
    63  - 55 = maybe low
    54  - 18 = yikes
    */

    // basically there are two advisors here.
    // one for your total, and one for your actual stats.
    switch (highRolls) {
        case 12: // all 18s
            document.getElementById("rollHiFlavor").innerHTML = "You would probably win the actual lottery.";
            break
        case 11:
        case 10:
        case 9:
        case 8:
        case 7: // all at least 15 with one or more 18s
            document.getElementById("rollHiFlavor").innerHTML = "This is quite the extreme roll.";
            break
        case 6:
        case 5:
        case 4:
            document.getElementById("rollHiFlavor").innerHTML = "You would definitely be able to make a strong character with this!";
            break
        case 3:
            document.getElementById("rollHiFlavor").innerHTML = "This is pretty good!" + "<br>" + 
            "Think about which stats would be important for your character.";
            break
        case 2:
        case 1:
            document.getElementById("rollHiFlavor").innerHTML = "This is good!" + "<br>" + 
            "Think about which stats would be extra important for your character.";
            break
        default: // no stats reach 15
            document.getElementById("rollHiFlavor").innerHTML = "Unfortunately you didn't roll any high numbers," + "<br>" + 
            "but it could still be okay!";
    }
}
