const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = ('generateMarkdown');
const path = require ('path');

//prompt questions for readme input
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
        type: 'input', 
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

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((res) =>{
        writeToFile('README.MD', generateMarkdown({...res}));
    });

}

init();
