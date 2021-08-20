const inquirer = require('inquirer');
const  Engineer  = require('./lib/Engineer');
const  Intern  = require('./lib/Intern');
const  Manager = require('./lib/Manager');
const fs = require('fs');
const generateCards = require('./src/page-template');

// empty array
var team = [];

const questions = [

    {
        type: 'input',
        name: 'name',
        message: "What is team member's name?",

    },
    { 
        type: 'number',
        name: 'id',
        message: "\nWhat is team member's id?", 
    },
    {
        type: 'input',
        name: 'email',
        message: "\nWhat is team member's email?",
    },
    {
        type: 'list',
        name: 'role',
        message: "\nWhat is team member's role?",
        choices: ['Engineer', 'Intern', 'Manager' ]
    },
    {  
        when: function( answers ) {
           if(answers.role === 'Engineer')
           return true;
          },

    type: 'input',
    message: "\nEngineer: What is team member's Github username?",
    name: 'github',
    
    },
    {  
        when: function( answers ) {
           if(answers.role === 'Intern')
           return true;
          },

    type: 'input',
    message: "\nIntern: Where did team member go to school?",
    name: 'school',
    
    },
    {  
        when: function( answers ) {
           if(answers.role === 'Manager')
           return true;
          },
    type: 'input',
    message: "\nManager: What is team member's office number?",
    name: 'officeNumber',
    },
    {  
    message:'\nWould you like to add another team member?',
    name: 'newEmployee',
    type: "confirm",
    default: false,
    },

];


const init = () => {
inquirer.prompt(questions)
.then((res) => {

        if (res.role === "Manager") {
            const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
            team.push(manager);
        }

        if (res.role === "Engineer") {
            const engineer = new Engineer(res.name, res.id, res.email, res.github);
            team.push(engineer);
        }

        if (res.role === "Intern") {
            const intern = new Intern(res.name, res.id, res.email, res.school);
            team.push(intern);
        }
        
        if (res.newEmployee) {
            init();
        } else {
            
        }
    
        let pageHTML = generateCards(team);

        fs.writeFileSync('./dist/index.html', pageHTML, err => {
            if(err) throw new Error(err);
        });  
       
    });  
       
 };

init();
