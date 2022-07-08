// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: "Enter your project title: ",
    },
    {
        type: 'input',
        name: 'project_desc',
        message: "Enter a description for your project: ",
    },
    {
        type: 'input',
        name: 'install_instructions',
        message: "Enter installation instructions for your project: ",
    },
    {
        type: 'input',
        name: 'project_usage',
        message: "Enter usage information for your project: ",
    },
    {
        type: 'input',
        name: 'contribution_guide',
        message: "Enter contribution guidelines for your project: ",
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: "Enter test instructions for your project: ",
    },
    {
        type: 'input',
        name: 'project_license',
        message: "Choose a license for your project: ",
    },
    {
        type: 'input',
        name: 'github_username',
        message: "Enter your GitHub username: ",
    },
    {
        type: 'input',
        name: 'email_address',
        message: "Enter your email address: ",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // data.forEach(a => console.log("\n" + a));
    console.log(JSON.stringify(data, null, '  '));
    var readme = generateMarkdown(data);
    fs.appendFile(fileName, readme, (err) =>
    err ? console.error(err) : console.log('Finished')
);

}

// TODO: Create a function to initialize app
function init() {
    console.log("test");
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(JSON.stringify(answers, null, '  '));
            writeToFile("readme.md", answers);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
            console.log(error);
    });
}

// Function call to initialize app
init();
