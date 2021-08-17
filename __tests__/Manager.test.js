const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');


test('constructor creates an Manager object', ()=> {
    const manager = new Manager('Brandon', 24, 'brandon@pixeltree.us', '123');

    expect(manager.name).toBe('Brandon');
    expect(manager.id).toBe(24);
    expect(manager.email).toBe('brandon@pixeltree.us');
    expect(manager.officeNumber).toBe('123');
});
