import GimmeError from '../models/Error';
import schema from '../schema';
import { handleTypeErrors } from '../utils';

/**
 * Generate a random number.
 * @param {number} digits - The number of digits.
 * @param {boolean} format - Formats the number with commas (and decimals).
 * @param {boolean} decimal - Include decimal places in number.
 */
const gimmeNumber = (digits = 1, format = false, decimal = false) => {
  // Validate argument data types.
  const args = [digits, format, decimal];
  handleTypeErrors(args, schema.number);

  if (digits > 20) {
    throw new GimmeError(
      `Limitation Error! The maximum number of digits that can be safely generated is 20. You entered ${digits}. Try a lower number.`
    );
  }

  let number;

  number = randomNumber(digits);

  if (format) {
    const length = number.split('').length;
    number = number
      .split('')
      .map((num, i) => {
        const isLastDigit = length - 1 === i;
        return (length - i - 1) % 3 === 0 && !isLastDigit
          ? num.concat(',')
          : num;
      })
      .join('');
  }

  if (decimal) {
    const values = randomNumber(2);
    number = number.concat(`.${values}`);
  }

  return number;
};

/**
 * Generate a random number and return that value to the exponent power.
 * @param {number} count - The number of digits to randomize.
 * @return {string}
 */
const randomNumber = count => {
  let rand = Math.random();

  // prevents returning a number with fewer than the required number of digits [count]
  while (rand < 0.1) {
    rand = Math.random();
  }

  return Math.floor(rand * Math.pow(10, count)).toString();
};

export default {
  number: (digits, format, decimal) => gimmeNumber(digits, format, decimal)
};
