
const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');


test('constructor creates an Engineer object', ()=> {
    const engineer = new Engineer('Brandon', 24, 'brandon@pixeltree.us', 'brandon-stewart-rgb');

    expect(engineer.name).toBe('Brandon');
    expect(engineer.id).toBe(24);
    expect(engineer.email).toBe('brandon@pixeltree.us');
    expect(engineer.github).toBe('brandon-stewart-rgb');
});

