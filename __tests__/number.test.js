import GimmeError from '../src/models/GimmeError';
import GimmeNumber from '../src/models/GimmeNumber';

const dataTypes = ['number', 'string'];

describe('GimmeNumber', () => {
  it('should return a string', () => {
    const result = new GimmeNumber().result;
    expect(typeof result, `should be type ${dataTypes[1]}. Got: ${typeof result}`).toEqual(
      dataTypes[1]
    );
  });
  it('should return a single digit number when zero arguments are provided', () => {
    const result = new GimmeNumber().result;
    expect(result, `should only one-digit long. Got: ${result}`).toHaveLength(1);
  });

  it('should return a four-digit number when first argument is 4', () => {
    const digits = 4;
    const result = new GimmeNumber(digits).result;
    expect(result, `should only be four-digits long. Got: ${result}`).toHaveLength(digits);
  });

  it('should throw error when first argument is not a number', () => {
    expect(function() {
      new GimmeNumber('not a number').result;
    }).toThrowError(GimmeError);
  });

  it('should throw error when first argument is greater than 20', () => {
    expect(function() {
      new GimmeNumber(21).result;
    }).toThrowError(GimmeError);
  });

  it('should properly format large numbers', () => {
    const result = new GimmeNumber(6, true).result;
    const format = /\d{3},\d{3}/;
    expect(result, `should have the following format: ###,###. Got: ${result}`).toMatch(format);
  });

  it("should ignore formatting if number isn't large enough", () => {
    const result = new GimmeNumber(2, true).result;
    const format = /\d{2}/;
    expect(result, `should have the following format: ##. Got: ${result}`).toMatch(format);
  });

  it('should contain decimal values', () => {
    const result = new GimmeNumber(8, true, true).result;
    const format = /\.\d{2}$/;
    expect(result, 'should have the following format: 12,345,678.90').toMatch(format);
  });

  it('should contain decimal values', () => {
    const result = new GimmeNumber(4, false, true).result;
    const format = /\d{4}.\d{2}$/;
    expect(result, 'should have the following format: XXXX.XX').toMatch(format);
  });

  // TODO : ERRORS
  // describe('that is not a boolean', () => {
  //       it('should throw an error', () => {
  //         expect(function() {
  //           gimme.number(8, true, ['not a boolean']);
  //         }).to.throw(Error, /Type Error/i);
  //       });
  //     });
});
