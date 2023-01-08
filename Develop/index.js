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


function renderLicenseBadge(license) {
    let badge = ''
    if (license == 'MIT') {
        badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license == 'APACHE_2.0') {
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    }
    return badge;
}



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
<pre><code>${usage}</code></pre>

## License
${license}
Please see the more detail from below link
${renderLicenseSection(license)}


## Contributing
<pre><code>${contributing}</code></pre>

## Test
<pre><code>${test}</code></pre>


## Questions
If you have any questions about this repo, please contact me at ${email}.
You can find more of my work at
[@${username}](https://www.github.com/${username})
`

function writeToFile(data) {
    fs.writeFile('readme.md', data, function (err) {
        if (err) throw err;
        console.log("Successfully created Readme.md")
    })
}
// //Create a function to initialize app
const init = () => {
    promptUser()

        .then(answers => writeToFile(generateReadMe(answers)))
        .catch((err) => console.error(err));

};

// Function call to initialize app

init();

