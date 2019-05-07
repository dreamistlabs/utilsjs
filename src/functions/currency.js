import GimmeError from '../models/Error';
import gimme from './number';
import schema from '../schema';
import isoCodes from '../data/countryCodes';
import { handleTypeErrors, required } from '../utils';

/**
 * Generate a random currency value.
 * @param {string} iso -
 * @param {number} digits -
 * @param {boolean} decimal -
 * @return {string}
 */

const gimmeCurrency = (iso = required(), digits = 1, decimal = false) => {
  const args = [iso, digits, decimal];
  handleTypeErrors(args, schema.currency);

  let meta = isoCodes[iso];
  let currency = gimme.number(digits, true, decimal);

  if (meta.symbol_placement === 'prefix') {
    currency = meta.symbol.concat(currency);
  } else if (meta.symbol_placement === 'suffix') {
    currency = currency.concat(meta.symbol);
  }

  return currency;
};

export default {
  currency: (iso, scale, includeDecimal) =>
    gimmeCurrency(iso, scale, includeDecimal)
};
