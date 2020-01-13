const fs = require('fs');
const convertFactory = require('electron-html-to');
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML.js");

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
    ]).then(function ({
        username,
        color
    }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        const starQuery = `https://api.github.com/users/${username}/starred?per_page=1`;
        

        axios.get(queryUrl).then(function (res) {
            const profPic = res.data.avatar_url;
            const name = res.data.name;
            const company = res.data.company;

            const location = res.data.location;
            const gitURL = res.data.html_url;
            const blog = res.data.blog;
            
            const bio = res.data.bio;

            const repos = res.data.public_repos;
            const followers = res.data.followers;
            const following = res.data.following;
            
        });

        axios.get(starQuery).then(function (res) {
            const stars = res.data.length;
        });


    });

    // writeToFile();
}

init();