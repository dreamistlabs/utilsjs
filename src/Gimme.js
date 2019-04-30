import GimmeCredit from './models/GimmeCredit';
import GimmeName from './models/GimmeName';
import GimmeNumber from './models/GimmeNumber';

export default {
  credit: opts => new GimmeCredit(opts).result,
  name: (type, gender, salutation) =>
    new GimmeName(type, gender, salutation).result,
  number: (digits, format, decimal) =>
    new GimmeNumber(digits, format, decimal).result
};
