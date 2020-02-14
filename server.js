
const express = require('express');

const actionRouter = require("./router/actionRouter");
const projectRouter = require("./router/projectRouter");

const server = express();

server.use(express.json());
server.use(logger);


server.get('/', (req, res) => {
  res.json(`Node Sprint Challenge 1`);
});

server.use('/api/projects', projectRouter);
server.use('/api/actions', logger, actionRouter);
//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'origin'
    )}`
  );

  next();
}

module.exports = server;