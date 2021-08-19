var inquirer = require('inquirer');
const fs = require('fs')
const path = require("path");
// const Employee = require('../lib/Employee.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const generateData = require('./lib/data-renderer')
const { writeFile } = require('./lib/generate-site');
const generateData = require('./lib/data-renderer');
// const generatePage = require('./src/page-template');


// questions
const questions = [

    {
        type: 'input',
        name: 'name',
        message: "What is team member's name?",

    },
    { 
        type: 'number',
        name: 'id',
        message: "What is team member's id?", 
    },
    {
        type: 'input',
        name: 'email',
        message: "What is team member's email?",

    },
    {
        type: 'list',
        name: 'role',
        message: "What is team member's role?",
        choices: ['Engineer', 'Intern', 'Manager' ]
    },
    {  
        when: function( answers ) {
           if(answers.role === 'Engineer')
           return true;
          },

    type: 'input',
    message: "Engineer: What is team member's Github username?",
    name: 'github',
    
    },
    {  
        when: function( answers ) {
           if(answers.role === 'Intern')
           return true;
          },

    type: 'input',
    message: "Intern: Where did team member go to school?",
    name: 'school',
    
    },
    {  
        when: function( answers ) {
           if(answers.role === 'Manager')
           return true;
          },
    type: 'input',
    message: "Manager: What is team member's office number?",
    name: 'officeNumber',
    },
    {  
    message:'Would you like to add another team member?',
    name: 'newEmployee',
    type: "confirm",
    },

];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your new README.md file has been created!')
    });
  };


var theTeam = [];
const init = () => {
inquirer.prompt(questions)
.then((res) => {

    if(res.role === 'Engineer') {
        const engineer = new Engineer(res.name, res.id, res.email, res.github);
        theTeam.push(engineer);
        console.log(engineer);
    }

    if(res.role === 'Intern') {
        const intern = new Intern(res.name, res.id, res.email, res.school);
        theTeam.push(intern);
        console.log(intern)
    }

    if(res.role === 'Manager') {
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        theTeam.push(manager);
        console.log(manager)
    }
    
    
    if(res.newEmployee) {
       init();
    } else {

       console.log('things happening')
        
      }

    //   generateData(theTeam);

    

    //   fs.writeFile('./dist/data-string.js', JSON.stringify(theTeam), err => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log('Your new data file has been created!')
    //   });
    
    const syntax = generateData(userResponses, userInfo);
    console.log(syntax);





    });
   

};

    
   


init();

// console.log(JSON.stringify(answers, null, '  '));