const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");

const generateHTML = require("./generateHTML.js");

const convertFactory = require('electron-html-to');
const conversion = convertFactory({
    converterPath: convertFactory.converters.PDF
});


// function writeToFile(fileName, data) {
//     console.log("write to file");
// }

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
        const starQuery = `https://api.github.com/users/${username}/starred`;

        const profile = {
            color: color
        };

        // handle when values are null

        axios.get(queryUrl).then(function (res) {
            profile.pfp = res.data.avatar_url;
            profile.name = res.data.name;
            profile.company = res.data.company;

            profile.location = res.data.location;
            profile.gitURL = res.data.html_url;
            profile.blog = res.data.blog;

            profile.bio = res.data.bio;

            profile.repos = res.data.public_repos;
            profile.followers = res.data.followers;
            profile.following = res.data.following;

            axios.get(starQuery).then(function (res) {
                profile.stars = res.data.length;
                console.log(profile);
                const profPage = generateHTML(profile);
                // fs.writeFile('test1.html', profPage, function (err) {
                //     if (err) throw err;
                //     console.log('Saved!');
                // })

                conversion(
                {html: profPage} ,
                    function (err, result) {
                        if (err) {
                            return console.error(err);
                        }

                        // console.log(result.numberOfPages);
                        // console.log(result.logs);
                        result.stream.pipe(fs.createWriteStream('./profile.pdf'));
                        conversion.kill();

                    }
                );
            });
        });


    });

    // writeToFile();
}

init();