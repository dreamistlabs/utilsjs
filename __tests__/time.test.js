import gimme from '../src/functions/time';
import GimmeError from '../src/models/GimmeError';

describe('gimme.time()', () => {
  it('should return a string', () => {
    const result = gimme.time();
    expect(
      typeof result,
      `should be type string. Got: ${typeof result}`
    ).toEqual('string');
  });

  it.todo('when period is false, it should match the HH:MM format');
  it.todo(
    'when period is false, single digit hours should have a zero prepended to it'
  );
  it.todo('single digit minutes should have a zero prepended to it');
});
