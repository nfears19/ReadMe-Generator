// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const markdownGen = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter the installation instructions for your project.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Enter the usage information for your project.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What are your contribution guidelines?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'tests'
        },
        {
            type: 'list',
            message: 'Choose the license for your project.',
            choices: [
                'CC0 1.0 Universal',
                'GNU LGPL v3',
                'MIT',
                'Apache License, Version 2.0',
                'Boost'
            ],
            name: 'license',
            message: 'Choose the license for your project.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
    ])

// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((data) => writeToFile("README.md", markdownGen(data)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
