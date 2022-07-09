
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: "Enter your project title: "
    },
    {
        type: 'input',
        name: 'project_desc',
        message: "Enter a description for your project: "
    },
    {
        type: 'input',
        name: 'install_instructions',
        message: "Enter installation instructions for your project: "
    },
    {
        type: 'input',
        name: 'project_usage',
        message: "Enter usage information for your project: "
    },
    {
        type: 'input',
        name: 'contribution_guide',
        message: "Enter contribution guidelines for your project: "
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: "Enter test instructions for your project: "
    },
    {
        type: 'list',
        name: 'project_license',
        message: "Choose a license for your project: ",
        choices: ['Apache 2.0', 'Creative Commons 0', 'BSD 3-Clause', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Unlicense'],
        filter(val) {
            return val;
        }
    },
    {
        type: 'input',
        name: 'github_username',
        message: "Enter your GitHub username: "
    },
    {
        type: 'input',
        name: 'email_address',
        message: "Enter your email address: "
    }
];

function writeToFile(fileName, data) {
    var readme = generateMarkdown(data);
    fs.appendFile(fileName, readme, (err) =>
    err ? console.error(err) : console.log('Finished')
);

}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("readme.md", answers);
        })
        .catch((error) => {
            console.log(error);
    });
}

// Function call to initialize app
init();
