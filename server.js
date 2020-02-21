const express = require('express');
const helmet = require('helmet');

const DatabaseName = require('./myModel');

const server = express();
server.use(helmet());
server.use(express.json());

server.get('/', (req, res)=>{
    res.status(200).json({message: 'Welcome to my API'})
})

module.exports = server