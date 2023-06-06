// config.js
const minimist = require("minimist");

const argv = minimist(process.argv.slice(2));

//configuration
const {
  greeting = "Hello",
  who = "You",
  width = 400,
  height = 500,
  color = "Pink",
  size = 100,
} = argv;

//export the configurations
module.exports = {
  greeting,
  who,
  width,
  height,
  color,
  size,
};
