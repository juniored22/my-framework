'use strict';
const env           = process.env.NODE_ENV || 'development'
const config        = require('./config/config')[env];
const express       = require('express');
const app           = express();
const compression   = require('compression');
const debug         = require('debug')('http') //DEBUG=http PORT=8080 node index.js
const Connection    = require('./database/Connection');
const User          = require('./App/Model/User');
const Group         = require('./App/Model/Group');
const bodyParser    = require("body-parser");

require('./server')(app, express, config, debug, compression, bodyParser);
require('./routes')(app, debug)

const sequelize =  Connection.sequelize(config)
const mongo     =  Connection.mongo(config)

User.mongoInit(mongo)
Group.mongoInit(mongo)

User.sequelizeInit(sequelize)
Group.sequelizeInit(sequelize)




