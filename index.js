// Required node packages 
const inquirer = require(`inquirer`); 
const fs = require(`fs`);
// const generateMarkdown = require("./utils/generateMarkdown")


// Create README using inquirer prompt responses 
const createReadme = ({title, licenseBadge, description, installation, usage, contribution, test, license, userName, email}) => 
`# ${title}
${licenseBadge}

## Description
${description}

## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contribution](#contribution)
 - [Test](#test)
 - [License](#license)
 - [Questions](#questions)

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
For questions you can reach me via [GitHub](https://github.com/${userName}) or [Email](${email})`


// Inquirer prompt questions 
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
        type: `list`,
        name: `license`,
        message: `Please select a license.`,
        choices: [`Apache`, `Boost`, `MIT`, `Mozilla`]
    },
    {
        type: `input`,
        name: `userName`,
        message: `Please enter your GitHub user name.`,
    },
    {
        type: `input`,
        name: `email`,
        message: `Please enter your email address.`,
    },
])

// Write file 

.then((answers) => {
    const readmeContent = createReadme(answers);
    
    fs.writeFile(`README.md`, readmeContent, (err) => 
    err ? console.log(err) : console.log (`Successfully created README.md`));
})

