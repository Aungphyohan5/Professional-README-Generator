// packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs');



//an array of questions for user input


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
            choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'NONE'],
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

// Function for th
function renderLicenseBadge(license) {
    let badge = ''
    if (license == 'MIT') {
        badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license == 'APACHE_2.0') {
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    }
    return badge;
}

// Function for the license link
function renderLicenseLink(license) {
    let licenseLink;

    if (license == 'MIT') {
        licenseLink = `https://mit-license.org`;
    } else if (license == 'APACHE_2.0') {
        licenseLink = `https://www.apache.org/licenses/LICENSE-2.0.html`;
    }
    return licenseLink;
}


// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = '';

    // if license is selected, create license with link to the information
    if (license != 'None') {
        licenseSection += 'Please see ' + renderLicenseLink(license) + ' to get more details about the license'
    }
    return licenseSection;
}
// console.log(renderLicenseSection('MIT'))

// Generate ReadMe function
const generateReadMe = ({ username, email, project, description, license, installation, test, usage, contributing }) =>
    `
# ${project}

# ${renderLicenseBadge(license)}

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
<code>${usage}</code>

## License
<pre> <code>${license}</code></pre>

${renderLicenseSection(license)}



## Contributing
<code>${contributing}</code>

## Test
<pre><code>${test}</code></pre>


## Questions
If you have any questions about this repo, please contact me at ${email}.
You can find more of my work at
[@${username}](https://www.github.com/${username})
`
// function to write ReadMe file
function writeToFile(data) {
    fs.writeFile('./Generated-readme/readme.md', data, function (err) {
        if (err) throw err;
        console.log("Successfully created Readme.md")
    })
}
// a function to initialize app
const init = () => {
    promptUser()

        .then(answers => writeToFile(generateReadMe(answers)))
        .catch((err) => console.error(err));

};

// Function call to initialize app

init();

