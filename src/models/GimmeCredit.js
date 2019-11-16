import GimmeError from './GimmeError';

class GimmeCredit {
  /**
   *
   * @param {*} opts
   */
  constructor(opts = {}) {
    this.validateOptions(opts);
    this._format = opts.format || false;
    // TODO: let users choose how many digits.
    this._digits = 15;
    this._number = this.randomNumber(this._digits);

    this._result = this.output();
  }

  get result() {
    return this._result;
  }

  /**
   * Generate the random credit card number.
   * @return { String } Generated credit card number.
   */
  output() {
    let result = this.randomNumber(this._digits);
    result = result
      .split('')
      .concat(this.getCheckSumNumber(result))
      .join('');

    if (this._format) {
      result = this.format(result);
    }

    return result;
  }

  /**
   * Format credit card number with spaces between every set of 4-digits.
   * @param { String } numStr - Generated credit card number.
   * @return { String } Formatted credit card number.
   */
  format = numStr => {
    return numStr
      .split('')
      .map((char, idx) => ((idx + 1) % 4 === 0 && idx !== 15 ? `${char} ` : char))
      .join('');
  };

  /**
   * Generates the Luhn formula check digit value that matches the number
   * generated by the generateRandom() method. The Luhn formula is a simple
   * checksum formula used to validate a variety of identification numbers,
   * including credit cards, which is why we're using it here.
   * https://en.wikipedia.org/wiki/Luhn_algorithm
   *
   * @since 0.0.1
   * @param { String } numStr - the random number.
   * @return { String } Returns the check digit value.
   */
  getCheckSumNumber = numStr => {
    return (
      numStr
        .split('')
        .map((digit, idx) => (idx % 2 === 0 ? Number(digit) : digit * 2))
        .map(digit => (digit > 10 ? digit - 9 : digit))
        .reduce((digit, total) => digit + total) % 10
    );
  };

  /**
   * Generate a 15-digit random number.
   * @since 0.1.0
   * @param { Number } digits - The length of number to generate.
   * @return { String } The generated number.
   */
  randomNumber(digits = 15) {
    let number = 0;
    while (number < Math.pow(10, digits - 1)) {
      number = Math.floor(Math.random() * Math.pow(10, digits));
    }
    return number.toString();
  }

  /**
   *
   * @param {*} opts
   */
  validateOptions(opts) {
    if (opts && opts instanceof Object) {
      for (let option in opts) {
        option === 'formatted' ? (this._formatted = opts[option]) : null;
      }
    } else {
      throw GimmeError(`Invalid parameter.  ${opts} `);
    }
  }
}

export default GimmeCredit;