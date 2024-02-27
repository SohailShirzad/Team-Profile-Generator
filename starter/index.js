const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];




function promptOptions(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'option',
            message:'What team member whould you like to add?',
            chocies:['Intern', 'Engineer', 'Finished assembling the team'],
        },
    ])
    .then((val) => {
        if(val.whatTeamMember === 'Intern'){
            //call add Engineer function
            addEngineer();
        }else if(val.WhatTeamMember === 'Engineer'){
            // call add Intern function
            addIntern();
        }else{
            CreateHTML();
        }
    });
}


/*-------------------------Functions for each employee type---------------------- */

//Engineer
function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's full name:",
        },
        {
            name: "input",
            name: "id",
            message: "Enter the engineers's ID:",
        },
        {
            name: "input",
            name: "email",
            message: "Enter the engineer's email:",
        },
        {
            name: "input",
            name: "github",
            message: "Enter the engineer's github:",
        },
    ])
    .then((val)=>{
        const engineer = new Engineer(
            val.name,
            val.id,
            val.email,
            val.github
        );
        teamMembers.push(engineer);
        promptOptions();
    });
}

//Intern
function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's full name:",
        },
        {
            name: "input",
            name: "id",
            message: "Enter the intern's ID:",
        },
        {
            name: "input",
            name: "email",
            message: "Enter the intern's email:",
        },
        {
            name: "input",
            name: "school",
            message: "Enter the intern's school:",
        },
    ])
    .then((val)=>{
        const intern = new Intern(
            val.name,
            val.id,
            val.email,
            val.school
        );
        teamMembers.push(intern);
        promptOptions();
    });
}

//Manager
function addManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's full name:",
        },
        {
            name: "input",
            name: "id",
            message: "Enter the team manager's ID:",
        },
        {
            name: "input",
            name: "email",
            message: "Enter the team manager's email:",
        },
        {
            name: "input",
            name: "officeNumber",
            message: "Enter the team manager's office number:",
        },
    ])
    .then((val)=>{
        const manager = new Manager(
            val.name,
            val.id,
            val.email,
            val.officeNumber
        );
        teamMembers.push(manager);
        promptOptions();
    });
}


/*------------------------- Since all team memebrs prompot questions have been created now render those data using html  */

function CreateHTML(){
    const html = render(teamMembers);

    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR);
    }

    fs.writeFileSync(outputPath, html);
    console.log(`HTML generated at ${outputPath}`);

}

addManager();




