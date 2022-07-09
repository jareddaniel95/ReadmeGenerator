// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { //['Apache 2.0', 'Creative Commons 0', 'BSD 3-Clause', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Unlicense']
  if (license == 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license == 'Creative Commons 0') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license == 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license == 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license == 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license == 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
This project is published under the ${license} license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.project_license);
  var output = renderLicenseBadge(data.project_license)
  output += `
 # ${data.project_title}

`;

// Description
output += `${data.project_desc}
`;

//Table of contents
output += `## Table of Contents
1. [Installation Instructions](#installation-instructions)
2. [Usage Guide](#usage-guide)
`;
if(license != '') {
  output += `3. [License](#license)
4. [Contribution Gude](#contribution-guide)
5. [Test Instructions](#test-instructions)
6. [Questions](#questions)
`;
} else {
  output += `3. [Contribution Gude](#contribution-guide)
4. [Test Instructions](#test-instructions)
5. [Questions](#questions)
`;
}

// Installation
output += `## Installation Instructions
${data.install_instructions}
`;

// Usage
output += `## Usage Guide
${data.project_usage}
`;

// License
if(license != '') {
  output += license;
}

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