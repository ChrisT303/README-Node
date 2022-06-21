// node modules
const { prompt } = require('inquirer');
const questions = require('./questions');
const markDown = require('./utils/generateMarkdown');
// prompts questions
prompt(questions).then(markDown);