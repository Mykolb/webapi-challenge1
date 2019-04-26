//imports
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');


//routers
const projectRouter = require('./routes/project-router');
const actionRouter = require('./routes/action-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send(`
    <h2>We have data showing</h2>
    <p>I hope....</p>
    `)
});

module.exports = server;