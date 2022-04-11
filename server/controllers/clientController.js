const { join } = require('path');

module.exports = {
  renderClientPages: (req, res) => {
    res.sendFile(
      join(__dirname, '..', '..', '..', 'client', 'build', 'index.html'),
    );
  },
};
