const { writeFile } = require('fs');

function generateMarkdown(data) {
  let output = `

#  Project Title
${data.title}
## Project Description
${data.description}
## Table of Contents
* [Project Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributors](#contributing)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Licesne
${data.license}
## Contributors
${data.contributing}
## Tests
${data.tests}
## Questions
${data.questions}
### Contact


`;

  writeFile('./utils/README.md', output, err => { if (err) throw err });
}



module.exports = generateMarkdown;
