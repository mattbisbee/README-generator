// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-orange?style=plastic&logo=appveyor.svg)`
  } else {
    return " "
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0': return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0': return 'https://opensource.org/licenses/gpl-license';
    case 'BSD 3': return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'None': return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !=='None') {
    return `
    ## License
    For information on this license, visit: ${renderLicenseLink(data.license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

`;
}

module.exports = generateMarkdown;
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();