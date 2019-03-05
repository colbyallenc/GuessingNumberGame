const { randomGuess } = require('./randomGuess.js')
const { guessSuccess } = require('./guessSuccess.js')
const fs = require('fs');
const readlineSync = require('readline-sync');


// function userPrompt(){
    console.log("Lets Play a Game >:) ...")
    // switch case for the type of game the user wants to play
    const levelOfDifficulty = readlineSync.question('Pick a Level of Difficulty (1, 2, or 3) : ');
    switch (levelOfDifficulty){
        case "3":
            randomGuess(Math.floor(Math.random() * Math.floor(1000))) //guess between 1-1000
        break;
        case "2":
            randomGuess(Math.floor(Math.random() * Math.floor(100))) //guess between 1-100
        break;
        case "1":
            randomGuess(Math.floor(Math.random() * Math.floor(10))) //guess between 1-10
        break;
    }
// }

module.exports = { userPrompt }