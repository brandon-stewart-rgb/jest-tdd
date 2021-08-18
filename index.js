
var jest = require('jest');
var inquirer = require('inquirer');
const fs = require('fs')
// const Employee = require('../lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
// const generatePage = require('./src/page-template');


//  CLASSES AND PROTOTYPES
// https://gist.github.com/prof3ssorSt3v3/c056b8b5f379ee2767bb4e8ad90f3dac

// common questions
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
    type: "list",
    choices: ["Yes", "No"],
    },

];

/// when: answers 
// https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/when.js#L18



const theTeam = [];
const init = function(){
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
    
    if(res.newEmployee === 'Yes') {
       return inquirer.prompt(questions);  
    } else {
        return;
    }
     
    
          
        
    
      
    // console.log(JSON.stringify(answers, null, '  '));
  });
  console.log('The team page has been produced!')
};
init();






//  function produceManager(answers) {
//     const manager = new Manager('name', 'id', 'email', 'officeNumber');
//     // return theTeam.push(manager);
//     console.log(manager)
//  }
