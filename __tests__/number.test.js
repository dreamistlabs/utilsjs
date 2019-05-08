import GimmeError from '../src/models/GimmeError';
import gimme from '../src/functions/number';

const dataTypes = ['number', 'string'];

describe('GimmeNumber', () => {
  it('should return a string', () => {
    const result = gimme.number();
    expect(
      typeof result,
      `should be type ${dataTypes[1]}. Got: ${typeof result}`
    ).toEqual(dataTypes[1]);
  });
  it('should return a single digit number when zero arguments are provided', () => {
    const result = gimme.number();
    expect(result, `should only one-digit long. Got: ${result}`).toHaveLength(
      1
    );
  });

  it('should return a four-digit number when first argument is 4', () => {
    const digits = 4;
    const result = gimme.number(digits);
    expect(
      result,
      `should only be four-digits long. Got: ${result}`
    ).toHaveLength(digits);
  });

  it('should throw error when first argument is not a number', () => {
    expect(() => {
      gimme.number('not a number');
    }).toThrow(Error, /Type Error/i);
  });

  it('should throw error when first argument is greater than 20', () => {
    expect(() => {
      gimme.number(21);
    }).toThrow(GimmeError);
  });

  it('should properly format large numbers', () => {
    const result = gimme.number(6, true);
    const format = /\d{3},\d{3}/;
    expect(
      result,
      `should have the following format: ###,###. Got: ${result}`
    ).toMatch(format);
  });

  it("should ignore formatting if number isn't large enough", () => {
    const result = gimme.number(2, true);
    const format = /\d{2}/;
    expect(
      result,
      `should have the following format: ##. Got: ${result}`
    ).toMatch(format);
  });

  it('should contain decimal values', () => {
    const result = gimme.number(8, true, true);
    const format = /\.\d{2}$/;
    expect(result, 'should have the following format: 12,345,678.90').toMatch(
      format
    );
  });

  it('should contain decimal values', () => {
    const result = gimme.number(4, false, true);
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
