/* eslint-disable no-unused-vars */

module.exports = {
  handleErrorNotFound: (_, res, next) => {
    try {
      res.status(404).json({ status: 404, message: 'Sorry Not Found' });
    } catch (err) {
      next('SERVER ERROR');
    }
  },

  handleErrorServer: (error, req, res, next) => {
    if (error.status) {
      res.status(error.status).json({
        status: error.status,
        message: error.message,
        massages: error.massages,
      });
    } else {
      res.status(500).json({ status: 500, message: 'SERVER ERROR' });
    }
  },
};
