function Engineer(name = '') {
    this.name = name;

    this.github = "GitHubUser";

    // returns an object with manager properties
    this.getRole = function() {
        return "Engineer"
    };

    this.getGithub = function() {
        return this.github
    };
}

module.exports = Engineer;