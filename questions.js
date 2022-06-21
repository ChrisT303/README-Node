const questions = 
[
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
        validate: (value) => {if (value){return true} else {return 'Need value to move forward'}}
    },
    {
        type: 'input',
        message: 'What is the description of the app?',
        name: 'description',
        validate: (value) => {if (value){return true} else {return 'Need value to move forward'}}
    },
    {
        type: 'input',
        message: 'What are your table of contents?',
        name: 'tableOfCcontents',
        validate: (value) => {if (value){return true} else {return 'Need value to move forward'}}
    },
    {
        type: 'input',
        message: 'How do you install your app?',
        name: 'instalation',
        validate: (value) => {if (value){return true} else {return 'Need value to move forward'}}
    },
    {
        type: 'input',
        message: 'How do you use the app?',
        name: 'usage',
        validate: (value) => {if (value){return true} else {return 'Need value to move forward'}}
    },
    {
        type: 'list',
        message: 'Do you have a license to add?',
        name: 'license',
        choices: ['The Mit License', 'The GPL License', 'Apache License', 'BSD License', 'N/A'  ],
        validate: (value) => {if (value){return true} else {return 'Need value to move forward'}}
    },
    {
        type: 'input',
        message: 'Do you have contributors to add?',
        name: 'contributing',
        validate: (value) => {if (value){return true} else {return 'Need value to move forward'}}
    },
    {
        type: 'input',
        message: 'How do you test your app?',
        name: 'tests',
        validate: (value) => {if (value){return true} else {return 'Need value to move forward'}}
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'questions',
        validate: (value) => {if (value){return true} else {return 'Need value to move forward'}}
    }
];

module.exports = questions;




 
