import GimmeError from './error';
import gimme from './number';
import isoCodes from '../data/countryCodes';

/**
 * Generate a random currency value.
 * @param {string} [iso]
 * @param {number} [digits]
 * @param {boolean} [decimal]
 * @return {string}
 */

const gimmeCurrency = (iso, digits, decimal) => {
  let meta = isoCodes[iso];
  let currency = gimme.number(digits, true, decimal);
  console.log(currency);

  if (meta.symbol_placement === 'prefix') {
    currency = meta.symbol.concat(currency);
  } else if (meta.symbol_placement === 'suffix') {
    currency = currency.concat(meta.symbol);
  }

  return currency;

  // /**
  //  * Verify the parameters passed in are valid. If not, throw an error.
  //  */
  // validate(...params) {
  //   const [num, bool, str] = ['number', 'boolean', 'string'];

  //   typeValidator(params[0], str);
  //   typeValidator(params[1], num);
  //   typeValidator(params[2], bool);
  //   typeValidator(params[3], num);
  // }
};

/**
 * Throw a missing parameter error. Used as default value for ISO parameter.
 * @return {GimmeError}
 */
export const required = () => {
  throw new GimmeError(
    'Missing Parameter! You must provide a valid ISO country code.'
  );
};

// /**
//  * Throw a type error. Used to verify arguments passed in are of the right data type.
//  * @return {GimmeError}
//  */
// export const typeValidator = (data, type) => {
//   if (typeof data !== type) {
//     throw new GimmeError(
//       `Type Error! Argument must be a ${type}. You entered ${data} which is a ${typeof data}.`
//     );
//   }
// };

export default {
  currency: (iso, scale, includeDecimal) =>
    gimmeCurrency(iso, scale, includeDecimal)
};
