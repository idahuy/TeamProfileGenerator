function Manager(name = '') {
    this.name = name;

    this.officeNumber = 100;

    // returns an object with manager properties
    this.getRole = function() {
        return "Manager"
    };

    this.getOfficeNumber = function() {
        return this.officeNumber
    };
}

module.exports = Manager;