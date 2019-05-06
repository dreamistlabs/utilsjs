import gimmeCredit from './functions/credit';
import gimmeCurrency from './functions/currency';
import gimmeName from './functions/name';
import gimmeNumber from './functions/number';

export default {
  ...gimmeCredit,
  ...gimmeCurrency,
  ...gimmeName,
  ...gimmeNumber
};
