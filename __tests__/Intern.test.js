
const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');


test('constructor creates an Intern object', ()=> {
    const intern = new Intern('Brandon', 24, 'brandon@pixeltree.us', 'brandon-stewart-rgb');

    expect(intern.name).toBe('Brandon');
    expect(intern.id).toBe(24);
    expect(intern.email).toBe('brandon@pixeltree.us');
    expect(intern.school).toBe('brandon-stewart-rgb');
});

