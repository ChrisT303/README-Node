const { writeFile } = require('fs');

function generateMarkdown(data) {
  let output = `
# ${data.title}

`;

  writeFile('./utils/README.md', output, err => { if (err) throw err });
}

module.exports = generateMarkdown;
