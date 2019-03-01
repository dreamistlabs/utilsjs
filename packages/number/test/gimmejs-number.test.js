// import 'babel-polyfill';

// import { expect } from 'chai';
// import GimmeError from 'gimmejs-error';
// import * as gimme from '../src';

// describe('gimme.number()', () => {
//   const expectedDataTypes = ['number', 'string'];
//   describe('with zero arguments', () => {
//     const output = gimme.number();

//     it(`should return a js ${expectedDataTypes[0]} object`, () => {
//       expect(typeof output, `should be of type ${expectedDataTypes[0]}`).to.equal(
//         expectedDataTypes[0]
//       );
//     });
//     it('should return a single digit number', () => {
//       expect(output.toString(), 'should return a single digit number').to.have.lengthOf(1);
//     });
//   });

//   describe('with the first argument', () => {
//     describe("that's a number", () => {
//       const digits = 4;
//       const output = gimme.number(digits);

//       it(`should return a js ${expectedDataTypes[0]} object`, () => {
//         expect(typeof output, `should be of type ${expectedDataTypes[0]}`).to.equal(
//           expectedDataTypes[0]
//         );
//       });
//       it(`should return a random ${digits}-digit number`, () => {
//         expect(output.toString(), `should return a ${digits}-digit number`).to.have.lengthOf(
//           digits
//         );
//       });
//     });
//     describe("that's not a number", () => {
//       it('should throw an error', () => {
//         expect(function() {
//           gimme.number('some string');
//         }).to.throw(Error, /Type Error/i);
//       });
//     });
//     describe("that's a number greater than 20", () => {
//       it('should throw an error', () => {
//         expect(function() {
//           gimme.number(21);
//         }).to.throw(Error, /Limitation Error/i);
//       });
//     });
//   });

//   describe('with the second argument (include formatting)', () => {
//     describe("that's boolean: true and the first argument greater than 3", () => {
//       const output = gimme.number(6, true);
//       const format = /\d{3},\d{3}/;

//       it(`should return a js ${expectedDataTypes[1]} object`, () => {
//         expect(typeof output, `should be of type ${expectedDataTypes[1]}`).to.equal(
//           expectedDataTypes[1]
//         );
//       });
//       it('should be properly formatted', () => {
//         expect(output, 'should have the following format: 123,456').to.match(format);
//       });
//     });
//     describe("that's boolean: true but the first argument less than 3", () => {
//       const output = gimme.number(2, true);
//       const format = /\d{2}/;

//       it(`should return a js ${expectedDataTypes[1]} object`, () => {
//         expect(typeof output, `should be of type ${expectedDataTypes[1]}`).to.equal(
//           expectedDataTypes[1]
//         );
//       });
//       it('should be properly formatted', () => {
//         expect(output, 'should have the following format: 123,456').to.match(format);
//       });
//     });
//     describe("that's boolean: false", () => {
//       const output = gimme.number(6, false);

//       it(`should return a js ${expectedDataTypes[0]} object`, () => {
//         expect(typeof output, `should be of type ${expectedDataTypes[0]}`).to.equal(
//           expectedDataTypes[0]
//         );
//       });
//     });
//     describe("that's not a boolean", () => {
//       it('should throw an error', () => {
//         expect(function() {
//           gimme.number(8, 'not boolean');
//         }).to.throw(Error, /Type Error/i);
//       });
//     });
//   });

//   describe('with the third argument (include decimals)', () => {
//     describe('that is boolean: true and second argument: true', () => {
//       const output = gimme.number(8, true, true);
//       const format = /\.\d{2}$/;

//       it(`should return a js ${expectedDataTypes[1]} object`, () => {
//         expect(typeof output, `should be of type ${expectedDataTypes[1]}`).to.equal(
//           expectedDataTypes[1]
//         );
//       });
//       it('should contain decimal values', () => {
//         expect(output, 'should have the following format: 12,345,678.90').to.match(format);
//       });
//     });
//     describe('that is boolean: true but second argument: false', () => {
//       const output = gimme.number(4, false, true);
//       const format = /\.\d{2}$/;

//       it(`should return a js ${expectedDataTypes[1]} object`, () => {
//         expect(typeof output, `should be of type ${expectedDataTypes[1]}`).to.equal(
//           expectedDataTypes[1]
//         );
//       });
//       it('should contain decimal values', () => {
//         expect(output, 'should have the following format: 1,234.56').to.match(format);
//       });
//     });
//     describe('that is boolean: false', () => {
//       const output = gimme.number(8, true, false);
//       const format = /\.\d{2}$/;

//       it(`should return a js ${expectedDataTypes[1]} object`, () => {
//         expect(typeof output, `should be of type ${expectedDataTypes[1]}`).to.equal(
//           expectedDataTypes[1]
//         );
//       });
//       it('should not contain any decimal values', () => {
//         expect(output, 'the result should look like this: 12,345,678 — no decimals').to.not.match(
//           format
//         );
//       });
//     });
//     describe('that is not a boolean', () => {
//       it('should throw an error', () => {
//         expect(function() {
//           gimme.number(8, true, ['not a boolean']);
//         }).to.throw(Error, /Type Error/i);
//       });
//     });
//   });
// });

// describe('gimme.numbers()', () => {
//   describe('with first argument (quantity)', () => {
//     describe('that is number: 0', () => {
//       const output = gimme.numbers(0);

//       it('should return null', () => {
//         expect(output).to.be.null;
//       });
//     });
//     describe('that is a number greater than 0', () => {
//       const output = gimme.numbers(2);
//       it('should return an array', () => {
//         expect(output).to.be.an.instanceof(Array);
//       });
//     });
//     describe('that is empty', () => {
//       const output = gimme.numbers();
//       it('should return an array', () => {
//         expect(output).to.be.an.instanceof(Array);
//       });
//       it('should contain a single result', () => {
//         expect(output).to.be.of.length(1);
//       });
//     });
//     describe('that is not a number', () => {
//       it('should throw an error', () => {
//         expect(function() {
//           gimme.numbers('not a number');
//         }).to.throw(Error, /Type Error/i);
//       });
//     });
//   });
// });
