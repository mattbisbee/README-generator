//'npm init' to install packages
//'npm i inquirer' to install inquirer

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter the name of your project. (Required)',
    validate: (titleName) => {
      if (titleName) {
        return true;
      } else {
        return 'Please provide a project name!'
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please entrer your GitHub username. (Required)',
    validate: (githubUsername) => {
      if (githubUsername) {
        return true;
      } else {
        return 'Please provide a GitHub username!'
      }
    }
  },

  {
    type: 'input',
    name: 'email', 
    message: 'Please enter your email address. (Required)',
    validate: (emailAddress) => {
      if (emailAddress) {
        return true;
      } else {
        return 'Please provide an email address so others can contact you about this project.'
      }
    }
  },

  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project. (Required)',
    validate: (describeProject) => {
      if  (describeProject) {
        return true;
      } else {
        return 'Please provide a project description!'
      }
    }
  },

  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have? (use arrow keys)',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None' ],
  },

  {
    type: 'input',
    name: 'dependencies',
    message: 'What command should run the install dependencies?',
    default: 'npm i'
  },

  {
    type: 'input',
    name: 'test',
    message: 'What command should be used to run tests?',
    default: 'npm test'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },

  {
    type: 'input',
    name: 'contribute',
    message: 'What does the user need to know about contributing to this project?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('Your new generated README is ready')
  });
}

// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}


// Function call to initialize app
init()
