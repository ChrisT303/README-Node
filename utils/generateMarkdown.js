const { writeFile } = require('fs');
let badge = license => {
  license == 'The MIT License'
  ? `![The MIT License](https://img.shields.io/badge/License-MIT-green)`
  : license == 'The GPL License'
  ? `![The GPL License](https://img.shields.io/badge/License-GPL-purple)`
  : license == 'Apache License'
  ? `![Apache License](https://img.shields.io/badge/License-Apache-yellow)`
  : license == 'BSD License'
  ? `![BSD License](https://img.shields.io/badge/License-BSD-blue)`
  : '';
};

function generateMarkdown(data) {
  let output = `

# ${data.title}
${badge(data.license)}

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
## Contributors
${data.contributing}
## Tests
${data.tests}
## Questions
### Contact me by clicking the below links:
[Github Link](https://github.com/${data.questions})
[Email Link](mailto:${data.email})


`;

  writeFile('./utils/README.md', output, err => { if (err) throw err });
}



module.exports = generateMarkdown;
