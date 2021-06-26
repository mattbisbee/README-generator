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
    message: 'Please add all collaborators that worked on the project. Add email and GitHub info if possible. (Optional)'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Please describe how to use this project properly. (Optional)',
    default:   '1) If adding an image, store it in the image folder(assets/images). Make sure to write out the name of the file with it\'s file type when prompted, i.e, image.jpg. 2) When adding information, using correct Markdown language will render properly so it is highly encouraged. 3) Leaving out information will render as a blank area under the sub-heading. 4) Your GitHub username and email address will automatically be rendered in the \'Contribute\' section so don\'t add it again. If you want to keep the default link in this section as well, just press enter. Keep in mind that if you add any text whatsoever here it will delete that link and pass in your typed information instead.'
},

  {
    type: 'input',
    name: 'features',
    message: 'Please add any features or demonstrations here. (Optional)',
  },

  {
    type: 'input',
    name: 'images',
    message: 'Please add the image name and type here. This must be written exactly and it is case sensitive! (Optional)',
  },

  {
    type: 'input',
    name: 'altText',
    message: 'Please add the alt text for the image. (Optional)',
  },

  {
    type: 'checkbox',
    name: 'languages',
    message: 'Please add any information on the technologies used in your project. (Optional)',
    choices: [
      new inquirer.Separator(' = The Languages = '),
      {
        name: 'CSS',
      },
      {
        name: 'HTML',
      },
      {
        name: 'JavaScript',
      },
      { 
        name:'Inquirer',
      }, 
      {
        name: 'Node JS',
      } 
    ],
    // Use this code if you want to make this answer required
    // validate(answer) {
    //   if (answer.length < 1) {
    //     return 'You must choose at least one language!'
    //   }
    //   return true
    // },
  },

  {
    type: 'input',
    name: 'technology',
    message: 'Please add additional technology used and it\s corresponding website. (Optional)',
  },

  {
    type: 'input',
    name: 'contribute',
    message: 'Please describe how the user can collaborate with you on this project. (Optional)',
    default: '[Contributor Covenant](https://www.contributor-covenant.org/)'
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
