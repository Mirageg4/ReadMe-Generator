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
        name: 'tableContents',
        default: 'None'
    },

    {
        message: 'Enter any Installation Instructions',
        type: 'input', 
        name: 'installInstructions',
        default: 'None'
    },

    {
        message: 'How is the Application used?',
        type: 'input', 
        name: 'appInstructions',
        default: 'None'
    },

    {
        message: 'Enter Project Licenses',
        type: 'input', 
        name: 'projectLicense',
        default: 'None'
    },

    {
        message: 'Enter Additional Contributions',
        type: 'input', 
        name: 'projectContribute',
        default: 'None'
    },

    {
        message: 'Was Project Testing Performed?',
        type: 'input', 
        name: 'projectTesting',
        default: 'None'
    },

    {
        message: 'Provide email address for user Questions?',
        type: 'input', 
        name: 'emailAddress',
        default: 'None'
    },
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
