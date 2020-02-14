
const express = require('express');

const actionRouter = require("./data/helpers/actionModel");
const projectRouter = require("./data/helpers/projectModel");

const server = express();

server.use(express.json());
server.use(logger);


server.get('/', (req, res) => {
  res.json(`Node Sprint Challenge 1`);
});

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