import test from 'ava';
import GimmeNumber from '../packages/gimmejs-number';

const gimme: GimmeNumber = new GimmeNumber();

test('.random() -- returns an unformatted, 4-digit number', (t: any) => {
  const regex = /^\d{4}$/;
  const result = gimme.number();

  t.regex(result, regex, `output: ${result}`);
});

test('.random({ digits: 2 }) -- returns an unformatted, 2-digit number', (t: any) => {
  const regex = /^\d{2}$/;
  const result = gimme.number({ digits: 2 });

  t.regex(result, regex, `output: ${result}`);
});

test('.random({ digits: 9 }) -- returns an unformatted, 9-digit number', (t: any) => {
  const regex = /^(\d{9})$/;
  const result = gimme.number({ digits: 9 });

  t.regex(result, regex);
});

test('.random({ digits: 4, formatted: true }) -- returns a formatted, 4-digit number', (t: any) => {
  const regex = /^\d{1},\d{3}$/;
  const result = gimme.number({ digits: 4, formatted: true });

  t.regex(result, regex);
});

test('.random({ digits: 9, formatted: true }) -- returns a formatted, 9-digit number', (t: any) => {
  const regex = /^(\d{3},){2}(\d{3})$/;
  const result = gimme.number({ digits: 9, formatted: true });

  t.regex(result, regex);
});

test('.random({ digits: 5, formatted: true, decimals: true }) -- returns a formatted, 5-digit number with decimals', (t: any) => {
  const regex = /^\d{2},\d{3}.\d{2}$/;
  const result = gimme.number({ digits: 5, formatted: true, decimals: true });

  t.regex(result, regex);
});

test('.random({ digits: 5, formatted: false, decimals: true }) -- returns an unformatted, 5-digit number with decimals', (t: any) => {
  const regex = /^\d{5}.\d{2}$/;
  const result = gimme.number({ digits: 5, formatted: false, decimals: true });

  t.regex(result, regex);
});

test('.random({ digits: 14, formatted: true }) -- returns a formatted, 14-digit number', (t: any) => {
  const regex = /^(\d{2},)(\d{3},?){4}$/;
  const result = gimme.number({ digits: 14, formatted: true });

  t.regex(result, regex);
});

test('.random({ digits: 21}) -- throws an error for exceeding maximum length', (t: any) => {
  const error = t.throws(() => {
    gimme.number({ digits: 21 });
  }, Error);
  t.is(error.name, 'Error');
});
