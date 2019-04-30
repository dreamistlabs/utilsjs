import GimmeError from './GimmeError';
import { typeValidator, NAMES_LIST } from '../utils';

class GimmeName {
  // TODO: FEATURES
  // Should have option to choose to include salutation
  // Should have option to choose to include suffix?

  /**
   * Generate a random name.
   * @param {string} type - The number of digits.
   * @param {string} gender - Formats the number with commas (and decimals).
   * @param {boolean} salutation - Include decimal places in number.
   */
  constructor(type = 'full', gender = 'male', salutation = false) {
    [this._type, this._gender, this._salutation] = [type, gender, salutation];
    // this.validate(this._digits, this._formatted, this._decimal);
    this._result = this.generateRandomName();
  }

  get result() {
    return this._result;
  }

  /**
   * Get the randomly generated name.
   * @return { String }
   */
  generateRandomName() {
    const isFemale = this._gender === 'female';
    const firstNameOnly = this._type === 'first';
    const lastNameOnly = this._type === 'last';

    const listOfFirstNames = NAMES_LIST.FIRST_NAMES;
    const listOfLastNames = NAMES_LIST.LAST_NAMES;

    const firstName =
      listOfFirstNames['male'][
        this.randomIndexPositionFrom(listOfFirstNames['male'])
      ];
    const lastName =
      listOfLastNames[this.randomIndexPositionFrom(listOfLastNames)];

    if (firstNameOnly) {
      return firstName;
    }

    if (lastNameOnly) {
      return lastName;
    }

    return `${firstName} ${lastName}`;
  }

  randomIndexPositionFrom = list => {
    return Math.floor(Math.random() * list.length);
  };

  /**
   * Verifies the options being passed in, rejecting invalid and only returning
   * valid arguments.
   * @param   { Array } [options]
   * @return  { Object }
   */
  validateOptions = options => {
    // this function needs to identify, filter, and address all possible
    // errors. It should only return a valid options hash for the rest of
    // the api to process. After this point, there should not be any errors
    // as everything being passed has been filtered.

    let acceptedOptions = ['gender', 'salutation'];
    let object = {};

    // check if an argument is an object
    options.forEach(function(option) {
      if (option.constructor === Object) {
        for (let key in option) {
          if (acceptedOptions.includes(key.toLowerCase())) {
            // once the key is verified, check for the key's value
            // and make sure that it is a valid option as well.
            object[key] = option[key];
          } else {
            // send/log a warning message informing user their
            // object contains an argument(s) that are not valid?
          }
        }
      } else {
        // send/log a warning message informing user that they
        // passed in additional arguments, outside of the options {},
        // which is not valid, and therefore ignored
      }
    });

    return object;
  };
}

export default GimmeName;
