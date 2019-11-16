import test from 'ava';
import GimmeCredit from '../packages/gimmejs-credit';

const gimme: GimmeCredit = new GimmeCredit();

test('.credit() -- returns an unformatted, 16-digit cc number', (t: any) => {
  const regex = /^\d{16}$/;
  const result = gimme.credit();

  t.regex(result, regex, `output: ${result}`);
});

test(".credit({ digits: 15, format: 'visa' }) -- returns a formatted, 16-digit cc number", (t: any) => {
  const regex = /^(\d{4}\s*){4}$/;
  const result = gimme.credit({ digits: 15, format: 'visa' });

  t.regex(result, regex, `output: ${result}`);
});

test('.verifyCheckSum() -- returns true when check sum is valid', (t: any) => {
  const result = gimme.credit();
  const validCheckSum = gimme.verifyCheckSum(result);

  t.assert(validCheckSum);
});

test('.verifyCheckSum() -- returns false when check sum is invalid', (t: any) => {
  const result = '2345832748593816';
  const invalidCheckSum = !gimme.verifyCheckSum(result);

  t.assert(invalidCheckSum);
});
