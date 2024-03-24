#! /usr/bin/env node
import inquirer from "inquirer";
//1-    computer will genrate a random number   ---- Done
//2-    user input for gussing number           ---- Done
//3-    Campare user input with computer genarted number show result    
const randomNumber = Math.floor(Math.random()) * 1 - 6;
const answer = await inquirer.prompt([
    {
        name: "userguseednumber",
        type: "number",
        message: "Please guess a number between 1 to 6",
    },
]);
if (answer.userguseednumber === randomNumber) {
    console.log("Congratulation! you gussed right number..");
}
else {
    console.log("You guess worng number.");
}
