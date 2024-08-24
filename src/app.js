require('dotenv').config();

const express = require('express'); 
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

//init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

//init db
require('./dbs/init.mongoDB');

const { checkOverload } = require('./helpers/check.connect')
checkOverload();
//init routes
app.get('/', (req, res, next) => {
    return res.status(200).json({success: true, message: 'Welcome to e-commerce-JS'})   ;
})

//handling errors

module.exports = app;