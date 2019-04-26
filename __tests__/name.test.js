// 'use strict';

// // require chai — assertion library
// const chai = require('chai');
// const expect = chai.expect;
// const should = chai.should();

// // require your module and other dependencies
// const utils = require('../lib/index');
// const namesList = require('../lib/names/names');

// // use mocha
// // describe your module
// describe('#create', function() {

//   describe('with no optional arguments', function() {
//     const listOfFirstNames = namesList['firstName'];
//     const listOfLastNames = namesList['lastName'];
//     const acceptableFormat = /^(\w+)\s{1}(\w+)$/;

//     const name = utils.create();
//     const [firstName, lastName] = name.split(' ');

//     it('should return a random full name', function() {
//       name.should.match(acceptableFormat, `The generated name, ${name}, doesn't match the acceptable format: [firstName lastName].`);
//     });

//     it('should return a first name from the names list', function() {
//       expect(firstName).to.satisfy(function(firstName) {
//         return listOfFirstNames['male'].includes(firstName) || listOfFirstNames['female'].includes(firstName);
//       }, `${firstName} is not among the defined list of last names`);
//     });

//     it('should return a last name from the names list', function() {
//       listOfLastNames.should.include(lastName, `${lastName} is not among the defined list of last names`);
//     });
//   });

//   describe('with a gender argument', function() {
//     const listOfMaleNames = namesList['firstName']['male'];
//     const listOfFemaleNames = namesList['firstName']['female'];

//     describe('set to "Male"', function() {

//       it('should return a male first name', function() {
//         const name = utils.create({gender: 'Male'});
//         const firstName = name.split(' ')[0];

//         expect(listOfMaleNames).to.include(firstName);
//       });
//     });

//     describe('set to "Female"', function() {

//       it('should return a female first name', function() {
//         const name = utils.create({gender: 'Female'});
//         const firstName = name.split(' ')[0];

//         expect(listOfFemaleNames).to.include(firstName);
//       });
//     });
//   });

//   describe('with a salutation argument set to true', function() {

//     describe('and a gender argument of "Male"', function() {
//       it('should return a full name with a male salutation');
//     });

//     describe('and a gender argument of "Female"', function() {
//       it('should return a full name with a female salutation');
//     });

//     describe('and no gender argument defined', function() {
//       it('should return a random full name with salutation');
//     });
//   });
// });
