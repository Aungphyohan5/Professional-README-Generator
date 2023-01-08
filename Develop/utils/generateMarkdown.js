// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if (license != 'None') {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'APACHE 2.0') {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  return badge;
}
// console.log(renderLicenseBadge())

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case 'MIT':
      licenseLink = 'https://mit-license.org/';
      break;
    case 'APACHE 2.0':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0.html'
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if (license != 'None') {
    licenseSection += '##license\n'
    licenseSection += 'Please see' + renderLicenseLink(license) + 'to get more details about the license\n'
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README

// function generateMarkdown(data) {


//   const generateReadMe = ({ username, email, project, description, license, installation, test, usage, contributing }) =>
//     `
// # ${project}

// # ![License: MIT](https://img.shields.io/badge/License-${license}-green.svg)

// ## Table-of-Contents

// - [Description](#Description)
// - [Installation](#Installation)
// - [Usage](#Usage)
// - [License](#license)
// - [Contributing](#Contributing)
// - [Test](#Test)
// - [Questions](#Questions)


// ## Description

// ${description}


// ## Installation
// <pre> <code> ${installation} </code></pre>


// ## Usage
// <pre><code>${usage}</code></pre>

// ## License



// ## Contributing
// <pre><code>${contributing}</code></pre>

// ## Test
// <pre><code>${test}</code></pre>


// ## Questions
// If you have any questions about this repo, please contact me at ${email}.
// You can find more of my work at
// [@${username}](https://www.github.com/${username})
// `
// }

module.exports = renderLicenseBadge;
