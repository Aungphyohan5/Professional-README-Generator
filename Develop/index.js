// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'project-name',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'descriptione',
        message: 'Please write a short description of your project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'about-the-repo',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'about-the-repo',
        message: 'What does the user need to know about contributing to the repo?',
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
