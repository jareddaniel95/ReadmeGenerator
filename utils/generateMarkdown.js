// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var output =  `# ${data.project_title}

`;

// Description
output += `${data.project_desc}
`;

//Table of contents
output += `## Table of Contents
1. [Installation Instructions](#installation-instructions)
2. [Usage Guide](#usage-guide)
3. [License](#license)
4. [Contribution Gude](#contribution-guide)
5. [Test Instructions](#test-instructions)
6. [Questions](#questions)
`;

// Installation
output += `## Installation Instructions
${data.install_instructions}
`;

// Usage
output += `## Usage Guide
${data.project_usage}
`;

// License
output += `## License
${data.project_license}
`;

// Contributing
output += `## Contribution Guide
${data.contribution_guide}
`;

// Tests
output += `## Test Instructions
${data.test_instructions}
`;

// Questions
output += `## Questions
Github: [${data.github_username}](https://github.com/${data.github_username})  
Email: ${data.email_address}`;

return output;
}

module.exports = generateMarkdown;