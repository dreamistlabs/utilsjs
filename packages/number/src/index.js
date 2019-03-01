/**
 * GimmeJS-Number * (c) 2017 Dreamist Labs
 * Generates a random number or a collection of random numbers.
 */

import GimmeNumber from './models/GimmeNumber';
import { typeValidator } from './helpers/validators';

const number = (digits, formatted, decimal) =>
  new GimmeNumber(digits, formatted, decimal).output();

const numbers = (quantity = 1, digits, formatted, decimal) => {
  typeValidator(quantity, 'number');

  let results = [];

  if (quantity > 0) {
    for (let i = 0; i < quantity; i++) {
      results.push(number(digits, formatted, decimal));
    }
  } else {
    return null;
  }

  return results;
};

export { number, numbers };
