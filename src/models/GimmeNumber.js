import GimmeError from './GimmeError';
import { typeValidator } from '../utils';

class GimmeNumber {
  /**
   * Generate a random number.
   * @param {number} digits - The number of digits.
   * @param {boolean} formatted - Formats the number with commas (and decimals).
   * @param {boolean} decimal - Include decimal places in number.
   */
  constructor(digits = 1, formatted = false, decimal = false) {
    [this._digits, this._formatted, this._decimal] = [digits, formatted, decimal];
    this.validate(this._digits, this._formatted, this._decimal);
    this._result = this.output();
  }

  get result() {
    return this._result;
  }

  /**
   * Get the random number. Checks optional parameters.
   * @return { String } (if two or more arguments are passed to instance)
   */
  output() {
    let result = this.randomNumber(this._digits);

    if (this._formatted) {
      result = this.format(result);
    }

    if (this._decimal) {
      result = this.addDecimal(result);
    }

    return result;
  }

  /**
   * Generate a random number and return that value to the exponent power.
   * @param {Number} [exponent] - The number of digits to randomize.
   * @return {String}
   */
  randomNumber(exponent) {
    let rand = Math.random();

    // prevents returning a number with fewer than the required number of digits [exponent]
    while (rand < 0.1) {
      rand = Math.random();
    }

    return Math.floor(rand * Math.pow(10, exponent)).toString();
  }

  /**
   * Format a number with commas.
   * @param {string} [numStr] - number to format.
   * @return {string}
   */
  format(numStr) {
    const length = numStr.split('').length;
    return numStr
      .split('')
      .map((num, i) => {
        const isLastDigit = length - 1 === i;
        return (length - i - 1) % 3 === 0 && !isLastDigit ? num.concat(',') : num;
      })
      .join('');
  }

  /**
   * Add decimal values to number.
   * @param {string} [numStr] - the number to add decimals to
   * @return {string}
   */
  addDecimal(numStr) {
    const values = this.randomNumber(2);
    return numStr.concat(`.${values}`);
  }

  /**
   * Validate argument data types.
   * @param  {...any} params
   */
  validate(...params) {
    typeValidator(params[0], 'number');
    typeValidator(params[1], 'boolean');
    typeValidator(params[2], 'boolean');

    if (params[0] > 20) {
      throw new GimmeError(
        `Limitation Error! The maximum number of digits that can be safely generated is 20. You entered ${
          params[0]
        }. Try a lower number.`
      );
    }
  }
}

export default GimmeNumber;
