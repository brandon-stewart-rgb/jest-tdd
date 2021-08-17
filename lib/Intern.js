const Employee = require('../lib/Employee.js');

let Intern = class extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
  
    
    // getSchool(){
    
    // }
};

module.exports = Intern;