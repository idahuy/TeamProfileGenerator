function Manager(name = '') {
    this.name = name;

    this.officeNumber = Math.floor(Math.random() + 100);
    this.role = 'Manager'

    // returns an object with manager properties
    this.getRole = function() {
        return {
            role: this.role
        };
    };
}

module.exports = Manager;