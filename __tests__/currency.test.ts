import test from 'ava';
import GimmeCurrency from '../packages/gimmejs-currency';

const gimme = new GimmeCurrency();

test('.currency() -- returns a 4-digit USD currency value', (t: any) => {
  const regex = /^\$\d{1},\d{3}$/;
  const result = gimme.currency();

  t.regex(result, regex, `output: ${result}`);
});

test(".currency({ code: 'GBP', digits: 4 }) -- returns the correct currency symbol", (t: any) => {
  const symbol = '£';
  const result = gimme.currency({ code: 'GBP', digits: 4 });

  t.assert(result.startsWith(symbol), `output: ${result}`);
});

test(".currency({ code: 'GBP', digits: 4, symbolPosition: 'append' }) -- appends currency symbol after value", (t: any) => {
  const symbol = '£';
  const result = gimme.currency({
    code: 'GBP',
    digits: 4,
    symbolPosition: 'append',
  });

  t.assert(result.endsWith(symbol), `output: ${result}`);
});
