/*const morgan = require('morgan'); 
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const authentic = require('./authentic');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

if (app.get('env') === 'development') {
app.use(morgan('tiny'));
console.log('Morgan enabled...........!');
}

app.use(logger);
app.use(authentic);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Liatening on port ${port}...`));*/


console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    getCommits(repo, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database.......');
        callback({ id: id, gitHubUsername: 'mosh'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API.....');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}