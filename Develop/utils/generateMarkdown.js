// This is function that returns a license badge based on which license is passed in. If there is no license it returns an empty string.
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-orange?style=plastic&logo=appveyor.svg)`
  } else {
    return '';
  };
}

// This is a function that returns the license link. If there is no license it returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': return 'https://opensource.org/licenses/MIT';
    case 'Apache': return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU': return 'https://opensource.org/licenses/gpl-license';
    case 'BSD': return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'None': return '';
  }
}

// This is a function that generates markdown for new README.md file
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## **Description**
  ${data.description}

  ## **Images**
  ![${data.altText}](assets/images/${data.images})
  
  ## **Table of Contents**
  
  * [Installation](#dependencies)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Languages](#languages)
  * [Technology](#technology)
  * [Tests](#tests)
  * [Contribute](#contribute)
  
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

  ## **Languages**
  ${data.languages}

  ## **Technology**
  ${data.technology}

  ## **Tests**
  ${data.tests}

  ## **Contribute**
  Find me on [GitHub](https://www.github.com/${data.github})
  <br>
  Send me an [Email](mailto:${data.email})
  <br>
  ${data.contribute}
`;
}

module.exports = generateMarkdown;
renderLicenseBadge();
renderLicenseLink();