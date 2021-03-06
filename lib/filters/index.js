const TYPES = require('../filter').TYPES

module.exports = {
  [TYPES.TEXT]: require('./text-filter'),
  [TYPES.STATE]: require('./state-filter'),
  [TYPES.LABEL]: require('./label-filter'),
  [TYPES.COMMENTS]: require('./comments-filter'),
}
