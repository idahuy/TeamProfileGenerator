function Employee(name = '') {
    this.name = name;
    this.id = 100;
    this.email = "test@test.com";

    // returns an object with manager properties
    this.getName = function() {
        return this.name;
    };

    this.getId = function() {
        return this.id;
    };

    this.getEmail = function() {
        return this.email;
    };

    this.getRole = function() {
        return "Employee"
    }
}

module.exports = Employee;