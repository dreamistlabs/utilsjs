import GimmeCredit from './models/GimmeCredit';
import GimmeNumber from './models/GimmeNumber';

export default {
  credit: opts => new GimmeCredit(opts).result,
  number: (digits, format, decimal) => new GimmeNumber(digits, format, decimal).result,
};
