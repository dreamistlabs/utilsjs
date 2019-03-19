import GimmeNumber from './models/GimmeNumber';

export default {
  number: (digits, format, decimal) => new GimmeNumber(digits, format, decimal).result,
};
