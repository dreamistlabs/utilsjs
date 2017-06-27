'use strict';

const expect = require('chai').expect;
const should = require('chai').should;
const gimme = require('../lib/index');

describe('#name', function() {
  describe('with no arguments', function() {
    it('should return a full name', function() {
      var output = gimme.name();

      // test the result to the expected outcome
      expect(output).to.match(/^(\w+)\s{1}(\w+)$/);
    });
  });
});