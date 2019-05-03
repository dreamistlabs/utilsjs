import gimmeCredit from './functions/credit';
import gimmeName from './functions/name';
import gimmeNumber from './functions/number';

export default {
  ...gimmeCredit,
  ...gimmeName,
  ...gimmeNumber
};
