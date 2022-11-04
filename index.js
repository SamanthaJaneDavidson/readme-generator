// TODO: Include packages needed for this application
const inquirer = require(`inquirer`); 
const fs = require(`fs`);

// TODO: Create an array of questions for user input
const questions = [];

inquirer
.createPromptModule([
    {
        type: `input`,
        name: `title`,
        question: `What is the title of your project?`,
    },
    {
        type: `input`,
        name: `description`,
        question: `Provide a description of your project.`,
    },
    {
        type: `input`,
        name: `image`,
        question: `Insert a screen shot of your project site.`,
    },
    {
        type: `input`,
        name: `link`,
        question: `Enter the link to your project site.`,
    },
    {
        type: `input`,
        name: `license`,
        question: `Enter applicable license information.`,
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
