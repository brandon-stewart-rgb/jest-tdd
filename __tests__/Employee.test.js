const Employee =require('../lib/Employee.js');
const { test, expect } = require('@jest/globals');


test('constructor creates an employee object', ()=> {
    const employee = new Employee('Brandon', 24, 'brandon@pixeltree.us');

    expect(employee.name).toBe('Brandon');
    expect(employee.id).toBe(24);
    expect(employee.email).toBe('brandon@pixeltree.us');
});