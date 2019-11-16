import test from 'ava';
import GimmeError from '../packages/GimmeError';

// @todo: throwing a TypeError
test.skip(`throws a GimmeError error`, (t: any) => {
  const fn = () => {
    throw new GimmeError('uh oh!');
  };
  const error = t.throws(() => {
    fn();
  });
  t.is(error.name, 'uh oh!');
});
