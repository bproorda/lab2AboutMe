"use strict";
//Do First
console.log('This is working!');

//should wait for page to load before running greeting, I think its working...
window.onload = (event) => {
    // greeting();
};

//Greeting
function greeting() {
var name = prompt("what is your name?");
alert("Hello, " + name + ". Welcome to my site!");
console.log(name);
}


//Quiz
function Quiz() { 
alert("Welcome to my About Me quiz! Please answer questions with y or n");
var points = 0

//question 1
var ans1 = prompt("Was I born in Boston?");
console.log(ans1);
var lans1 = ans1.toLowerCase();
console.log(lans1)
if (lans1 === "n") {
    console.log("Visitor is correct")
    alert("That is Correct! Good Job!");
    points++
} else if (lans1 ==="y") {
    alert("Nope! Nice try though.");
    console.log("Visitor is incorrect")
} else {
    alert("Invalid Answer Detected!");
    console.log("Visitor is incorrect")
}

//question 2
var ans2 = prompt("Do I have two Dogs?");
console.log(ans2);
var lans2 = ans2.toLowerCase();
console.log(lans2)
if (lans2 === "y") {
    console.log("Visitor is correct")
    alert("That is Correct! For now...");
    points++
} else if (lans2 ==="n") {
    console.log("Visitor is incorrect")
    alert("Nope! Though I would not mind a third one...");
} else {
    console.log("Visitor is incorrect")
    alert("Invalid Answer Detected!");
}

//question 3
var ans3 = prompt("Do I drive a Dodge Demon?");
console.log(ans3);
var lans3 = ans3.toLowerCase();
console.log(lans3)
if (lans3 === "n") {
    console.log("Visitor is correct")
    alert("That is Correct...sadly...");
    points++
} else if (lans3 ==="y") {
    console.log("Visitor is incorrect")
    alert("I wish...");
} else {
    console.log("Visitor is incorrect")
    alert("Invalid Answer Detected!");
}

//question 4
var ans4 = prompt("Is my favorite novel genre fantasy/sci-fi?");
console.log(ans4);
var lans4 = ans4.toLowerCase();
console.log(lans4)
if (lans4 === "y") {
    console.log("Visitor is correct")
    alert("That is Correct! Maud'dib is pleased");
    points++
} else if (lans4 ==="n") {
    console.log("Visitor is incorrect")
    alert("Nope! Gandalf is not happy");
} else {
    console.log("Visitor is incorrect")
    alert("Invalid Answer Detected! Sauron is laughing!");
}

// question 5
var ans5 = prompt("Do I have a complete pair of lungs");
console.log(ans5);
var lans5 = ans5.toLowerCase();
console.log(lans5)
if (lans5 === "n") {
    console.log("Visitor is correct")
    alert("That is Correct! ...don't ask");
    points++
} else if (lans5 ==="y") {
    console.log("Visitor is incorrect")
    alert("Nope! if only...");
} else {
    console.log("Visitor is incorrect")
    alert("What?");
}
console.log(points);

var response 
if (points === 5) {
    response = " Congrats!"
} else if (points < 5 && points > 2) {
    response = " Not too shabby!"
} else {
    response = " ouch."
}

alert("You got " + points +" points!" +response);

}

// Quiz();

