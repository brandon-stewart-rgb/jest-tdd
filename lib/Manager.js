const Employee = require('../lib/Employee.js');

let Manager = class extends Employee {
    // manager links to employee
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
  
    // getOfficeNumber(){
    
    // }

};

module.exports = Manager;