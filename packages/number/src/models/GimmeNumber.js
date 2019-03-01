import GimmeError from 'gimmejs-error';
import { typeValidator } from '../helpers/validators';

class GimmeNumber {
  constructor(digits = 1, formatted = false, decimal = false) {
    [this._digits, this._formatted, this._decimal] = [digits, formatted, decimal];

    this.validate(this._digits, this._formatted, this._decimal);
  }

  /**
   * Get the random number. Checks optional parameters.
   * @return {number} (if one or no arguments are passed to instance)
   * @return {string} (if two or more arguments are passed to instance)
   */
  output() {
    let output = this.randomNumber(this._digits);

    if (this._formatted) {
      output = this.format(output);
    }

    if (this._decimal) {
      output = this.addDecimal(output);
    }

    return output;
  }

  /**
   * Generate a random number.
   * @param {number} [power] - number of digits
   * @return {number}
   */
  randomNumber(power) {
    let rand = Math.random();

    // prevents returning a number with fewer than the required number of digits [power]
    while (rand < 0.1) {
      rand = Math.random();
    }

    return Math.floor(rand * Math.pow(10, power));
  }

  /**
   * Format a number with commas.
   * @param {number} [num] - the number to format
   * @return {string}
   */
  format(num) {
    let x = num.toString().split('');

    if (x.length > 3) {
      for (let i = 3; i < x.length; i = i + 4) {
        x.splice(-i, 0, ',');
      }
    }

    return x.join('');
  }

  /**
   * Add decimal values to number.
   * @param {number/string} [num] - the number to add decimals to
   * @return {string}
   */
  addDecimal(num) {
    // checks if [num] is of type 'string'. If not, converts it.
    let x = typeof num === 'string' ? num : num.toString();

    let values = this.randomNumber(2);

    return x.concat(`.${values}`);
  }

  /**
   * Validate argument data types.
   * @param {array} [params]
   */
  validate(...params) {
    const [num, bool] = ['number', 'boolean'];

    typeValidator(params[0], num);
    typeValidator(params[1], bool);
    typeValidator(params[2], bool);

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
