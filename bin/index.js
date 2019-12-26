#!/usr/bin/env node

const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

let cmd = args._[0] || "help";

if (args.version || args.v) {
  cmd = "version";
}

if (args.help || args.h) {
  cmd = "help";
}

switch (cmd) {
  case "name":
    require("./cmds/filter")(args);
    break;

  case "random":
    require("./cmds/random")(args);
    break;
  case "version":
    require("./cmds/version")(args);
    break;

  case "help":
    require("./cmds/help")(args);
    break;

  default:
    console.error(`"${cmd}" is not a valid command!`);
    break;
}
