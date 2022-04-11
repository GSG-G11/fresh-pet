const express = require('express');
const apis = require('./apis');
const client = require('./client');
const { handleErrorServer, handleErrorNotFound } = require('../controllers');

const router = express();

// --------------------    apis    -----------
router.use('/api/v1', apis);

// -------------------- client    -----------
if (process.env.NODE_ENV === 'production') {
  router.use(client);
}

// -------------------- Handle Error ---------------------
router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports = router;
