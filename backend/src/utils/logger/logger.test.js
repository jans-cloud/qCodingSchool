const { assert } = require('chai');
const defaultLogger = require('./logger')('default');
const fileLogger = require('./logger')('filelog');

/**
* Test if the functions return an instance of a logger
*/
describe('logger.js', () => {
  describe('getLogger()', () => {
    it('should return a logger instance of category filelogger and defaultLogger', () => {
      assert(typeof (defaultLogger) === 'object');
      assert(typeof (fileLogger) === 'object');
    });
    it('logger has all functions', () => {
      assert(typeof (defaultLogger.trace) === 'function');
      assert(typeof (fileLogger.trace) === 'function');
      assert(typeof (defaultLogger.debug) === 'function');
      assert(typeof (fileLogger.debug) === 'function');
      assert(typeof (defaultLogger.info) === 'function');
      assert(typeof (fileLogger.info) === 'function');
      assert(typeof (defaultLogger.warn) === 'function');
      assert(typeof (fileLogger.warn) === 'function');
      assert(typeof (defaultLogger.error) === 'function');
      assert(typeof (fileLogger.error) === 'function');
      assert(typeof (defaultLogger.fatal) === 'function');
      assert(typeof (fileLogger.fatal) === 'function');
    });
  });
});
