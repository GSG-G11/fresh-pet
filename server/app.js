// const { join } = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes');


const app = express();
app.use(cookieParser());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(router);

module.exports = app;
