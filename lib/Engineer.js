const Employee = require('../lib/Employee.js');

let Engineer = class extends Employee {
    //used to setup your object, behaves like a normal method or logic 
    //below are the instance properties defined within the constructor
    constructor (name, id, email,github) {
        super(name, id, email)
        this.github = github;
    }
   
    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
   
};

module.exports = Engineer;