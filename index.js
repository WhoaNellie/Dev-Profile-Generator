const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML.js");
const toPDF = require('electron-html-to');

function writeToFile(fileName, data) {
    console.log("write to file");
}

function init() {
    inquirer.prompt([{
            message: "What is your GitHub Username?",
            name: "username"
        },
        {
            message: "Please choose a color:",
            type: "list",
            name: "color",
            choices: ["green", "blue", "pink", "red"]
        }
    ]).then(function ({username, color}) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        axios.get(queryUrl).then(function(res) {
            console.log(res);
    });
});

}

init();