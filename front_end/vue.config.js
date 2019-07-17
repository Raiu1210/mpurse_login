const fs = require('fs');

module.exports = {
    devServer: {
      https: {
        key: fs.readFileSync('../../../work/ssl/localhost.key'),
        cert: fs.readFileSync('../../../work/ssl/localhost.crt'),
        ca: fs.readFileSync('../../../work/ssl/myCA.pem'),
      }
    }
  }