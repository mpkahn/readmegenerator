//Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
    {

        type: "input",
        name: "Title",
        message: "Enter project title",
      },
      {       
        type: 'input',
        name: 'Description',
        message: 'Enter project description',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation instructions for your project',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage instructions for your project',
      },
      {
        type: 'input',
        name: 'Credit',
        message: 'Who or what contributed to this project?',
      },
      {
        type: 'input',
        name: 'Test',
        message: 'What are the instructions to test this project',
      },
      {
        type: 'checkbox',
        name: 'License',
        message: 'Select license used',
        choices: ["MIT", "gpl-3.0", "Apache-2.0"]
      },
      {
        type: 'input',
        name: 'Info',
        message: 'Enter your github username, followed by a space and then your email address',
      },

];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        else console.log("Success!");
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
