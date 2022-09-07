const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Bob');

    expect(manager.name).toBe('Bob')
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role', () => {
    const manager = new Manager('Bob')
    expect(manager.getRole()).toHaveProperty('role');
});