const {join} = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');
const productRouter = require('./routes/productRoutes');
const app = express();
app.use(cookieParser());
app.disable('x-powered-by');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/api/v1/products', productRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(errorHandler);

module.exports = app;
