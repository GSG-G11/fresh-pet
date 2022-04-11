const express = require('express');

const product = require('./productRoutes');


const apiRoute = express();


apiRoute.use('/products', product);


module.exports = apiRoute;
