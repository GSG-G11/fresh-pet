const express = require('express');

const { renderClientPages } = require('../../controllers');

const client = express.Router();

client.use('/', express.static('client/build'));
client.get('*', renderClientPages);

module.exports = client;
