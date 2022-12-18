// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
// const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description',
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
            name: 'installation',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ]);
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

const generateReadMe = ({ username, email, project, description, license, installation, test, usage, contributing }) =>
    `
# ${project}


## Table-of-Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#license)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)


## Description
 
 ${description}
 

## Installation
<pre> <code> ${installation} </code></pre>
    

## Usage
<pre><code>${usage}</code></pre>

## License
<pre><code>${license}</code></pre>

## Contributing
<pre><code>${contributing}</code></pre>

## Test
<pre><code>${test}</code></pre>


## Questions
If you have any questions about this repo, please contact me at ${email}. 
You can find more of my work at 
[@${username}](https://www.github.com/${username})
`
// TODO: Create a function to initialize app

const init = () => {
    promptUser()

        .then((answers) => writeFile('readme.md', generateReadMe(answers)))
        .then(() => console.log("Successfully created Readme.md"))
        .catch((err) => console.error(err));

};

// Function call to initialize app

init();