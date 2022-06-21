const { writeFile } = require('fs');

function generateMarkdown(data) {
  let output = `

#  ${data.title}
## ${data.description}
## ${data.tableOfContents}
## ${data.instalation}
## ${data.usage}
## ${data.license}
## ${data.contributing}
## ${data.tests}
## ${data.questions}
### Contact:


`;

  writeFile('./utils/README.md', output, err => { if (err) throw err });
}

module.exports = generateMarkdown;
