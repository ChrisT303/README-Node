const { prompt } = require('inquirer');
const questions = require('./questions');
const markDown = require('./utils/generateMarkdown');

prompt(questions).then(markDown);