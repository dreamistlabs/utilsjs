import GimmeError from '../src/models/GimmeError';

describe('GimmeError', () => {
  describe('When a new instance is created', function() {
    const error = new GimmeError();
    const name = 'GimmeError';
    it(`should have ${name} as its name`, function() {
      expect(
        error.name,
        `The name of the GimmeError instance should be ${name}. But instead it was ${
          error.name
        }`
      ).toBe(name);
    });
    it('should extend from the Error class', function() {
      expect(
        error,
        `The GimmeError instance should inherit from the Error class. Instead, it is an instance of ${Object.getPrototypeOf(
          error
        )}`
      ).toBeInstanceOf(Error);
    });
    it('should have a default error message', function() {
      expect(error.message).toMatch(/There was an error!/i);
    });

    describe('with a custom message', function() {
      const errorType = 'Type Error';
      const customMessage = 'with a custom message!';
      const error = new GimmeError(errorType, customMessage);

      it("should capture the message in the instance's message property", function() {
        expect(error.message).toContain(customMessage);
      });
    });
  });
  describe('when an instance of GimmeError is thrown', function() {
    it('should return an error of type GimmeError', function() {
      expect(function() {
        throw new GimmeError();
      }).toThrow(GimmeError);
    });
  });
});
