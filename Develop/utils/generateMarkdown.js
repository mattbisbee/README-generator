// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-orange?style=plastic&logo=appveyor.svg)`
  } else {
    return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': return 'https://opensource.org/licenses/MIT';
    case 'Apache': return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU': return 'https://opensource.org/licenses/gpl-license';
    case 'BSD': return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'None': return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
    ${renderLicenseBadge}
    <br>
    'For more information on this license, please visit: ${renderLicenseLink}'
    `
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## **Description**
  ${data.description}
  
  ## **Table of Contents**
  
  * [Installation](#dependencies)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Contribute](#contribute)
  * [Tests](#tests)
  
  ## **Installation**
  ${data.dependencies}

  ## **Usage**
  ${data.usage}

  ## **Credits**
  ${data.credits}

  ## **License**
  ${renderLicenseBadge(data.license)}
  <br>
  ${renderLicenseLink(data.license)}
  <br>

  ## **Features**
  ${data.features}

  ## **Contribute**
  Find me on [GitHub](https://www.github.com/${data.github})
  <br>
  Send me an [Email](mailto:${data.email})
  <br>
  ${data.contribute}

  ## **Tests**
  ${data.tests}
`;
}

module.exports = generateMarkdown;
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();