Skip to content
More
Search or jump to…

U
UofA-TUC-FSF-PT-10-2019-U-C
Project overview
Repository
Files
Commits
Branches
Tags
Contributors
Graph
Compare
Charts
Issues
0
Merge Requests
0
CI / CD
Operations
Packages
Wiki
Snippets
Members
Collapse sidebar
UA-Coding-Bootcamp
UofA-TUC-FSF-PT-10-2019-U-C
Repository
master
UofA-TUC-FSF-PT-10-2019-U-C
 week_9
 homework
 README.md
Eric Rosas's avatar
Update README.md
Eric Rosas authored 2 days ago
a13ab232
 README.md 3.37 KB
 
 
 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
# Unit 09 Node.js and ES6+ Homework: Developer Profile Generator
Create a command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command:
```sh
node index.js
```
The user will be prompted for a favorite color, which will be used as the background color for cards.
The PDF will be populated with the following:
* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following
To create the PDF, you will use the node package "electron-html-to"
https://www.npmjs.com/package/electron-html-to
Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:
```
AS A product manager
I WANT a developer profile generator
SO THAT I can easily prepare reports for stakeholders
```
Refer to the [design mockup](./Assets/09-NodeJS-homework-demo.pdf).
## Business Context
When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.
## Minimum Requirements
* Functional, deployed application.
* GitHub repository with a unique name and a README describing project.
* The application generates a PDF resume from the user provided GitHub profile.
* The generated resume includes a bio image from the user's GitHub profile.
* The generated resume includes the user's location and a link to their GitHub profile.
* The generated resume includes the number of: public repositories, followers, GitHub stars and following count.
* The background color of the generated PDF matches the color that the user provides.
```
GIVEN the developer has a GitHub profile
WHEN prompted for the developer's GitHub username and favorite color
THEN a PDF profile is generated
```
- - -
## Commit Early and Often
One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:
* Your commit history is a signal to employers that you are actively working on projects and learning new skills.
* Your commit history allows you to revert your code base in the event that you need to return to a previous state.
Follow these guidelines for committing:
* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.
* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.
* Don't commit half-done work, for the sake of your collaborators (and your future self!).
* Test your application before you commit to ensure functionality at every step in the development process.
We would like you to have more than 200 commits by graduation, so commit early and often!
## Submission on BCS
You are required to submit the following:
* An animated GIF demonstrating the app functionality
* A generated PDF of your GitHub profile
* The URL of the GitHub repository
- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.