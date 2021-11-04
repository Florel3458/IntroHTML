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
    var total1;
    var total2;
    var total3;
    var total4;
    var total5;
    var total6;
    var allroll;

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

    //drop the lowest roll
    if (d1 == lowest) {
        d1 = 0;
    } else if (d2 == lowest) {
        d2 = 0;
    } else if (d3 == lowest) {
        d3 = 0;
    } else d4 = 0;

    // put the total1 into text
    total1 = d1 + d2 + d3 + d4;
    if (total1 <= 9) {
        document.getElementById("statRoll1").innerHTML = "＜0" + total1 + "＞";
    } else document.getElementById("statRoll1").innerHTML = "＜" + total1 + "＞";
//-------------------------------------------------------------------------//
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

    //drop the lowest roll
    if (d1 == lowest) {
        d1 = 0;
    } else if (d2 == lowest) {
        d2 = 0;
    } else if (d3 == lowest) {
        d3 = 0;
    } else d4 = 0;

    // put the total2 into text
    total2 = d1 + d2 + d3 + d4;
    if (total2 <= 9) {
        document.getElementById("statRoll2").innerHTML = "＜0" + total2 + "＞";
    } else document.getElementById("statRoll2").innerHTML = "＜" + total2 + "＞";
//-------------------------------------------------------------------------//
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

    //drop the lowest roll
    if (d1 == lowest) {
        d1 = 0;
    } else if (d2 == lowest) {
        d2 = 0;
    } else if (d3 == lowest) {
        d3 = 0;
    } else d4 = 0;

    // put the total3 into text
    total3 = d1 + d2 + d3 + d4;
    if (total3 <= 9) {
        document.getElementById("statRoll3").innerHTML = "＜0" + total3 + "＞";
    } else document.getElementById("statRoll3").innerHTML = "＜" + total3 + "＞";
//-------------------------------------------------------------------------//
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

    //drop the lowest roll
    if (d1 == lowest) {
        d1 = 0;
    } else if (d2 == lowest) {
        d2 = 0;
    } else if (d3 == lowest) {
        d3 = 0;
    } else d4 = 0;

    // put the total4 into text
    total4 = d1 + d2 + d3 + d4;
    if (total4 <= 9) {
        document.getElementById("statRoll4").innerHTML = "＜0" + total4 + "＞";
    } else document.getElementById("statRoll4").innerHTML = "＜" + total4 + "＞";
//-------------------------------------------------------------------------//
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

    //drop the lowest roll
    if (d1 == lowest) {
        d1 = 0;
    } else if (d2 == lowest) {
        d2 = 0;
    } else if (d3 == lowest) {
        d3 = 0;
    } else d4 = 0;

    // put the total5 into text
    total5 = d1 + d2 + d3 + d4;
    if (total5 <= 9) {
        document.getElementById("statRoll5").innerHTML = "＜0" + total5 + "＞";
    } else document.getElementById("statRoll5").innerHTML = "＜" + total5 + "＞";
//-------------------------------------------------------------------------//
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

    //drop the lowest roll
    if (d1 == lowest) {
        d1 = 0;
    } else if (d2 == lowest) {
        d2 = 0;
    } else if (d3 == lowest) {
        d3 = 0;
    } else d4 = 0;

    // put the total6 into text
    total6 = d1 + d2 + d3 + d4;
    if (total6 <= 9) {
        document.getElementById("statRoll6").innerHTML = "＜0" + total6 + "＞";
    } else document.getElementById("statRoll6").innerHTML = "＜" + total6 + "＞";

    // get the total of all rolls
    allroll = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById("rollTotal").innerHTML = "Your total is " + allroll + "..."
    // add flavor text..... so much if/else is probably super inefficient but...
    if (allroll >= 90) {
        document.getElementById("rollFlavor").innerHTML = "An extremely good roll!!!";
    } else if (allroll >= 82) {
        document.getElementById("rollFlavor").innerHTML = "A very good roll!!";
    } else if (allroll >= 70) {
        document.getElementById("rollFlavor").innerHTML = "A nice roll!";
    } else if (allroll >= 64) {
        document.getElementById("rollFlavor").innerHTML = "An okay roll.";
    } else if (allroll >= 55) {
        document.getElementById("rollFlavor").innerHTML = "Might be a bit low.";
    } else document.getElementById("rollFlavor").innerHTML = "Yikes...";
}