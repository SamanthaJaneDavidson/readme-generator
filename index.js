// Required node packages 
const inquirer = require(`inquirer`); 
const fs = require(`fs`);

// TODO: Create an array of questions for user input
// const questions = [];

// Generate markdown using inquirer prompt responses 
const generateMarkdown = ({ title, description, installation, usage, contribution, test, license}) => 
`#${title}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Test
${test}

## License
${license}

## Questions
[GitHub](https://github.com/SamanthaJaneDavidson)`


// Inquirer prompt 
inquirer
.prompt([
    {
        type: `input`,
        name: `title`,
        message: `What is the title of your project?`,
    },
    {
        type: `input`,
        name: `description`,
        message: `Provide a description of your project.`,
    },
    {
        type: `input`,
        name: `installation`,
        message: `Please provide installation instructions.`,
    },
    {
        type: `input`,
        name: `usage`,
        message: `Please provide usage guidelines.`,
    },
    {
        type: `input`,
        name: `contribution`,
        message: `Please provide information on how to contribute to this project.`,
    },
    {
        type: `input`,
        name: `test`,
        message: `Please provide testing instructions.`,
    },
    {
        type: `input`,
        name: `license`,
        message: `Please provide license information.`,
    },
])

.then((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile(`README.md`, readmeContent, (err) => 
    err ? console.log(err) : console.log (`Successfully created README.md`));
})

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
