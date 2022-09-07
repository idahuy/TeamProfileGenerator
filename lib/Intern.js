function Intern(name = '') {
    this.name = name;

    this.school = "UCLA";

    // returns an object with manager properties
    this.getRole = function() {
        return "Intern"
    };

    this.getSchool = function() {
        return this.school
    };
}

module.exports = Intern;