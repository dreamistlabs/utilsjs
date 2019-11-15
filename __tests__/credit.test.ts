import test from 'ava';

test('foo', (t: any) => {
  t.pass();
});

// import GimmeCredit from '../src/models/GimmeCredit';
// import GimmeError from '../src/models/GimmeError';

// /**
//  * TODO
//  * * Re-generate random number if first 8-digits match actual credit card company numbers.
//  * * Allow option for users to choose separator when formatting number.
//  */
// describe('GimmeCredit', () => {
//   it('should return a string', () => {
//     const result = new GimmeCredit().result;
//     expect(typeof result, `should be type string. Got: ${typeof result}`).toEqual('string');
//   });

//   function verifyCheckDigit(number) {
//     return (
//       number
//         .toString()
//         .split('')
//         .slice(0, 15)
//         .map((digit, idx) => (idx % 2 === 0 ? Number(digit) : digit * 2))
//         .map(digit => (digit > 10 ? digit - 9 : digit))
//         .reduce((digit, total) => digit + total) % 10
//     );
//   }

//   it('passes the Luhn algorithm test', () => {
//     const result = new GimmeCredit().result;
//     let generatedCheckDigit = Number(
//       result
//         .toString()
//         .split('')
//         .pop()
//     );
//     let verifiedCheckDigit = verifyCheckDigit(result);

//     expect(generatedCheckDigit).toEqual(verifiedCheckDigit, `Generated number: ${result}`);
//   });

//   it('returns a number with spaces between every fourth number', () => {
//     const result = new GimmeCredit({ format: true }).result;
//     const creditCardRegex = /^(\d{4}\s){3}\d{4}$/;
//     expect(result).toMatch(
//       creditCardRegex,
//       `Result should match xxxx xxxx xxxx xxxx. Got '${result}' instead.`
//     );
//   });

//   it.skip('should throw an exception if the argument passed in is not an object', () => {
//     let badParameter = () => gimme.credit('not an object');
//     expect(badParameter, 'A GimmeError should be returned. Instead, got ' + badParameter).toThrow(
//       GimmeError
//     );
//   });
// });
