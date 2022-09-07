const Manager = require('./lib/Manager.js');
const Engineer = require('/lib/Engineer.js');
const Intern = require('/lib/Intern.js');
const inquirer = require("Inquirer");
const path = require("path");
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const generateTeam = require('./src/template.js');

teamArray = [];

function run() {
    function createTeam () {
        inquirer.createPromptModule([{
            type: 'list',
            message: 'What type of employee would you like to add to your team?',
            name: 'addEmployeePrompt',
            choices: ['Manager', 'Engineer', 'Intern', 'No more to add.']
        }]).then(function (userInput) {
            switch(userInput.addEmployeePrompt) {
                case 'Manager': 
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;

                default:
                    htmlBuilder();
            }
        })
    }

    // oop functions
    function addManager() {
        inquirer.prompt ([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's Office Number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        });
    }

    function addEngineer() {
        inquirer.prompt ([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's ID?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            }
        ])
    }
}