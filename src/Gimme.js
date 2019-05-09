import gimmeCredit from './functions/credit';
import gimmeCurrency from './functions/currency';
import gimmeName from './functions/name';
import gimmeNumber from './functions/number';
import gimmeTime from './functions/time';

export default {
  ...gimmeCredit,
  ...gimmeCurrency,
  ...gimmeName,
  ...gimmeNumber,
  ...gimmeTime
};
