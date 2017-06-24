'use strict';

// require chai — assertion library
const expect = require('chai').expect;

// require your module
const utils = require('../lib/index');

// use mocha
// describe your module
describe('#createName', function() {
  describe('with no arguments', function() {
    // what should the module do?
    it('should return a full name', function() {
      // run the module functionality
      var result = utils.createName();

      // test the result to the expected outcome
      expect(result).to.match(/^(\w+)\s{1}(\w+)$/);
    });
  });
});