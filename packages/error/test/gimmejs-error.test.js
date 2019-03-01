'use strict'

// load chai assertion library
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

// require module library
const GimmeError = require('../src/gimmejs-error');

describe('GimmeError', function() {
  context('When a new instance is created', function() {
    const error = new GimmeError();
    const name = 'GimmeError';
    it(`should have ${name} as its name`, function() {
      expect(error.name).to.equal(name, `The name of the GimmeError instance should be ${name}. But instead it was ${error.name}`);
    });
    it('should extend from the Error class', function() {
      expect(error).to.be.an.instanceof(Error, `The GimmeError instance should inherit from the Error class. Instead, it is an instance of ${Object.getPrototypeOf(error)}`);
    });
    it('should have a default error message', function() {
      expect(error.message).to.match(/There was an error!/i);
    });

    describe('with a custom message', function() {
      const customMessage = 'with a custom message!';
      const error = new GimmeError(customMessage);

      it('should capture the message in the instance\'s message property', function() {
        expect(error.message).to.equal(customMessage);
      });
    });
  });
  describe('when an instance of GimmeError is thrown', function() {
    it('should return an error of type GimmeError', function() {
      expect(function() {
        throw new GimmeError();
      }).to.throw(GimmeError);
    });
  });
});