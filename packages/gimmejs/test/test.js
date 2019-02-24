'use strict';

const expect = require('chai').expect;
const should = require('chai').should;
const gimme = require('../src/lib/index');

describe('#currency', function() {
  describe('with no arguments', function() {
    it('should return error for missing ISO parameter', function() {
      expect(function() {
        gimme.currency();
      }).to.throw(Error, /Missing Parameter/i);
    });
  });
  describe('when [iso] is not of type: String', function() {
    it('should return error when [Array] is used', function() {
      expect(function() {
        gimme.currency(['some','array']);
      }).to.throw(Error, /Incorrect Data Type/i);
    });
  });
  describe("with a given iso ('USD')", function() {
    const iso = 'USD';
    const symb = '$';

    describe('and scale argument: 10', function() {
      const result = gimme.currency(iso, 10);
      const format = /^\$\d{1}(\,\d{3}){3}$/;

      it(`should return a value in the billion scale  (eg. ${symb}1,000,000,000)`, function() {
        expect(result).to.match(format,
        `The output, ${result}, should match the following format: ${symb}1,000,000,000`);
      });
    });
  });
  describe('with a given scale (4)', function() {
    const scale = 4;

    describe('and ISO argument: USD', function() {
      const iso = 'USD';
      const result = gimme.currency(iso, scale);
      const format = /^\$\d{1}\,\d{3}$/;

      it(`should return a ${iso} formatted currency (eg. $1,000)`, function() {
        expect(result).to.match(format,
        `The output, ${result}, should match the following format: $1,000`);
      });
    });
  });
  describe("with a given iso, scale and includeDecimal set to: true", function() {
    describe('with no decimalScale argument', function() {
      const iso = 'EUR';
      const scale = 4;
      const result = gimme.currency(iso, scale, true);
      const format = /^\€\d{1}(\,\d{3})\.\d{2}$/;

      it('should return a value in the thousands scale with two decimals (eg. €1,000.00)', function() {
        expect(result).to.match(format,
        `The output, ${result}, should match the following format: €1,000.00`);
      });
    });
  });
});
describe('#name', function() {
  describe('with no arguments', function() {
    it('should return a full name', function() {
      var output = gimme.name();

      // test the result to the expected outcome
      expect(output).to.match(/^(\w+)\s{1}(\w+)$/);
    });
  });
});