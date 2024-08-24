'use strict';

const mongoose = require("mongoose");
const config = require('../config/config.mongodb');

const dbHost = config.db.host;
const dbPort = config.db.port;
const dbName = config.db.name;

  const connectString = `mongodb://${dbHost}:${dbPort}/${dbName}`;


class DataBase {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    if(1==1){   
      mongoose.set('debug', true);
      mongoose.set('debug', {color: true});
    }

    mongoose
      .connect(connectString, {
        maxPoolSize: 100,
      })
      .then((_) => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.log("Failed to connect to MongoDB", err);
      });
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new DataBase();
    }
    return this.instance;
  }
}

const instanceMongoDB = DataBase.getInstance();
module.exports = instanceMongoDB;