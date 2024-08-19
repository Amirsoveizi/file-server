const { randomFillSync } = require('crypto');

module.exports = (alloc = 8) => {
  return randomFillSync(Buffer.alloc(alloc)).toString('hex');
}