//'npm i' to install packages

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter the title of your project. (Required)',
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
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username. (Required)',
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
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have? Use arrow keys to scroll; enter to select.',
    choices: ['MIT', 'Apache', 'GNU', 'BSD', 'None' ],
  },
  
  {
    type: 'input',
    name: 'dependencies',
    message: 'What command should be run to install dependencies?',
    default: 'In the terminal, type: npm i'
  },
  
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be used to run tests?',
    default: 'In the terminal, type: npm test'
  },
  
  {
    type: 'input',
    name: 'credits',
    message: 'Please add all collaborators that worked on the project. (Optional)'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Please describe anything the user needs to know about using the repo. (Optional)',
  },

  {
    type: 'input',
    name: 'contribute',
    message: 'Please describe how the user can collaborate with you on this project. (Optional)'
  },

  {
    type: 'input',
    name: 'features',
    message: 'Please add any features or demonstrations here. (Optional)',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('Your new README.md file is now ready. Thank you for using README-Generator!')
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
