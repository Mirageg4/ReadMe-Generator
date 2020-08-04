const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const path = require ('path');

//questions that will be prompted to the user
const questions = [
    {
      message: 'What is your GitHub username?', 
      name: 'userName' 
    },

    {
        message: 'What is your Project title?',
        type: 'input', 
        name: 'projectName'  
    },

    {
        message: 'Enter your Project Description',
        type: 'input', 
        name: 'projectDescription'
    },

    {
        message: 'Enter your Table of Contents',
        type: 'editor', 
        name: 'tableContents'
    },

    {
        message: 'Enter any Installation Instructions',
        type: 'input', 
        name: 'installInstructions'
    },

    {
        message: 'How is the Application used?',
        type: 'input', 
        name: 'appInstructions'
    },

    {
        message: 'Enter Project Licenses',
        type: 'input', 
        name: 'projectLicense'
    },

    {
        message: 'Enter Additional Contributions',
        type: 'input', 
        name: 'projectContribute'
    },

    {
        message: 'Was Project Testing Performed?',
        type: 'input', 
        name: 'projectTesting'
    },

    {
        message: 'Provide email address for user Questions?',
        type: 'input', 
        name: 'emailAddress'
    },
];

//function to write the file name & data to an existing file, or create the file.
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// prompts the questions to the user, returns the promise, writes the filename, and data.
 function init() {
     inquirer.prompt(questions).then((res) => {
             writeToFile('ReadMe.md', generateMarkdown({...res}));
     }).catch(e => console.log(e));
 }


init();
