import GimmeError from '../src/models/Error';
import { NAMES_LIST } from '../src/utils';
import gimme from '../src/functions/name';

const listOfFirstNames = NAMES_LIST.FIRST_NAMES;
const listOfLastNames = NAMES_LIST.LAST_NAMES;

describe('gimme.name()', function() {
  describe('with no optional arguments', function() {
    const acceptableFormat = /^(\w+)\s{1}(\w+)$/;

    const name = gimme.name();
    const [firstName, lastName] = name.split(' ');

    it('should return a random full name', function() {
      expect(
        name,
        `The generated name, ${name}, doesn't match the acceptable format: [firstName lastName].`
      ).toMatch(acceptableFormat);
    });

    it('should return a first name from the names list', function() {
      const combinedFirstNames = [
        ...listOfFirstNames['male'],
        ...listOfFirstNames['female']
      ];
      expect(
        combinedFirstNames,
        `${firstName} is not among the defined list of last names`
      ).toContain(firstName);
    });

    it('should return a last name from the names list', function() {
      expect(
        listOfLastNames,
        `${lastName} is not among the defined list of last names`
      ).toContain(lastName);
    });
  });

  describe('with a gender argument', function() {
    const listOfMaleNames = listOfFirstNames['male'];
    const listOfFemaleNames = listOfFirstNames['female'];

    describe('set to "male"', function() {
      it('should return a male first name', function() {
        const name = gimme.name('full', 'male');
        const firstName = name.split(' ')[0];

        expect(listOfMaleNames).toContain(firstName);
      });
    });

    describe('set to "female"', function() {
      it('should return a female first name', function() {
        const name = gimme.name('full', 'female');
        const firstName = name.split(' ')[0];

        expect(listOfFemaleNames).toContain(firstName);
      });
    });
  });

  describe('with a salutation argument set to true', function() {
    describe('and a gender argument of "Male"', function() {
      it.todo('should return a full name with a male salutation');
    });

    describe('and a gender argument of "Female"', function() {
      it.todo('should return a full name with a female salutation');
    });

    describe('and no gender argument defined', function() {
      it.todo('should return a random full name with salutation');
    });
  });
});
