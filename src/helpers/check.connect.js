"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;

//check count connect
const countConnect = () => {
  const numConnect = mongoose.connections.length;
  console.log("Number of connect: " + numConnect);
};

//check overload
const checkOverload = () => {
  setInterval(() => {
    const numConnect = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    //example maximum of connections base on numCores
    const maxConnect = numCores * 5;
    console.log(
      "memoryUsage: " +
        memoryUsage / 1024 / 1024 +
        " MB, Number of connect: " +
        numConnect
    );
    if (numConnect > maxConnect) {
      console.log("Overload: " + numConnect + " > " + maxConnect);
    }
  }, _SECONDS);
};

module.exports = { checkOverload, countConnect };
