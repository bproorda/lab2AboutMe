"use strict";
//Do First
console.log('This is working!');

//should wait for page to load before running greeting, I think its working...
window.onload = (event) => {
    greeting();
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

//quiz in array form
var quesArray = ['Was I born in Boston?', 'Do I have two Dogs?', 'Do I drive a Dodge Demon?', 'Is my favorite novel genre fantasy/sci-fi?', 'Do I have a complete pair of lungs'];
var quizAns = ['n', 'y', 'n', 'y', 'n'];
var correctRes = ['That is Correct! Good Job!', 'That is Correct! For now...', 'That is Correct...sadly...', 'That is Correct! Maud\'dib is pleased', 'That is Correct! ...don\'t ask'];
var wrongRes = ['Nope! Nice try though.', 'Nope! Though I would not mind a third one...', 'I wish...', 'Nope! Gandalf is not happy', 'Nope! if only...'];
var wrongAns = ['y', 'n', 'y', 'n', 'y'];
var quizArray = [quesArray, quizAns, correctRes, wrongRes, wrongAns];

for(var i = 0; i < 5; i++) {
        var ans1 = prompt(quizArray[0][i]);
        console.log(ans1);
        var lans1 = ans1.toLowerCase();
        console.log(lans1)
        if (lans1 === quizArray[1][i]) {
            console.log("Visitor is correct")
            alert(quizArray[2][i]);
            quizBool = true;
            points++
        } else if (lans1 === quizArray[4][i]) {
            alert(quizArray[3][i]);
            console.log("Visitor is incorrect")
            quizBool = true;
        } else {
            alert("Invalid Answer Detected!");
            console.log("Visitor is incorrect");
            i--;
    }
}
//guess the number
//got help from w3 for random integer
var randomNumber = Math.floor(Math.random() * 11);
var guess;
console.log(randomNumber);

for(var count = 0; count < 4; count++) {
 guess = prompt('Guess a number between 0 and 10!');
 guess = parseInt(guess);
    if (guess === randomNumber) {
        console.log('guess was correct')
        alert('Your guess was correct, good job!');
        count = 4;
        points++;
    } else {
        console.log('guess was not correct');
        if (guess < randomNumber) {
            alert('Your Guess was too low, try again!');
        } else {
            alert('Your Guess was too high, try again!');
        }
        if (count === 3) {
            alert('Sorry, you ran out of guesses! The correct answer was ' + randomNumber + '.');
        }
    }
     
    
        
 }    
//guessing game with array
var musicTypes = ['country', 'classical', 'christian'];
var guess2;
var musicBool = false;
for (var count2 = 0; count2 < 6; count2++) {
    guess2 = prompt('Can you guess one of the genres of music I like?').toLowerCase();
    console.log(guess2);
    for (var y = 0; y < 3; y++) {
        if (guess2 === musicTypes[y]) {
            musicBool = true;
            y = 3;
            console.log(musicBool);
        }
    }
    if (musicBool === true) {
        count2 = 6;
        points++;
        alert('Good Guess!');
    } else {
        alert('nope! try again!');
    }
    if (count2 === 5) {
        alert('Sorry, you ran out of guess. The correct possible answers were classical, country, and christian');
    }
}
console.log(points);
var response 
if (points === 7) {
    response = " Congrats!"
} else if (points < 7 && points > 3) {
    response = " Not too shabby!"
} else {
    response = " ouch."
}
alert("You got " + points +" point(s) out of 7! " + response);

}

// Quiz();

