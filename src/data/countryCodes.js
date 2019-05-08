/**
 * gimmeJS-Currency follows the ISO 4217 currency codes. Please make sure you are
 * entering the correct currency code when adding a new currency profile to the list below.
 *
 * For more information on ISO 4217, please visit: http://www.xe.com/iso4217.php
 * For currency symbols, please refer to: http://www.xe.com/symbols.php
 */

/* Use these variables to assign group and decimal separators */
const [comma, period, space] = [',', '.', ' '];

const formatOne = {
  group_separator: comma,
  decimal_separator: period
};

const formatTwo = {
  group_separator: period,
  decimal_separator: comma
};

/**
 *  Currency Profile Formatting
 *  iso code: {
 *    symbol: the currency symbol
 *    symbol_placement: prefix or suffix
 *    currency_name: official name of the currency
 *    group_separator: to separate groupings of whole values
 *    decimal_separator: to separate group values from decimals
 *  }
 */
const isoCodes = {
  BRL: {
    symbol: 'R$',
    symbol_placement: 'prefix',
    currency_name: 'Brazilian Real',
    ...formatOne
  },
  USD: {
    symbol: '$',
    symbol_placement: 'prefix',
    currency_name: 'United States dollar',
    ...formatOne
  },
  EUR: {
    symbol: '€',
    symbol_placement: 'prefix',
    currency_name: 'Euro',
    ...formatOne
  },
  GBP: {
    symbol: '£',
    symbol_placement: 'prefix',
    currency_name: 'British pound',
    ...formatOne
  },
  SEK: {
    symbol: 'kr',
    symbol_placement: 'suffix',
    currency_name: 'Swedish krona',
    ...formatTwo
  }
};

export default isoCodes;
