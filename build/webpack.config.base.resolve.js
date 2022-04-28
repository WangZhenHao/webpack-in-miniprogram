const path = require('path');
const resolve = p => path.resolve(__dirname, '../', p);

module.exports = {
  alias: {
    '@lib': resolve('./src/lib'),
    '@components': resolve('./src/components'),
    '@utils': resolve('./src/utils')
  }
};
