import GimmeError from '../models/GimmeError';
import schema from '../schema';
import { getRandomIndex, handleTypeErrors, NAMES_LIST } from '../utils';

// TODO: FEATURES
// Should have option to choose to include salutation
// Should have option to choose to include suffix?

const LIST_OF_FIRST_NAMES = NAMES_LIST.FIRST_NAMES;
const LIST_OF_LAST_NAMES = NAMES_LIST.LAST_NAMES;

const TYPE_OPTIONS = ['full', 'first', 'last'];
const GENDER_OPTIONS = ['male', 'female'];

/**
 * Creates a new randomly generated name.
 * @function
 * @param {string} type - Full, first, or last name.
 * @param {string} gender - Male or female.
 * @param {boolean} salutation - Male, female, or custom string.
 */
const gimmeName = (type = 'full', gender = 'male', salutation = false) => {
  const args = [type, gender, salutation];

  handleTypeErrors(args, schema.name);

  const firstNameOnly = type === 'first';
  const lastNameOnly = type === 'last';

  const firstName =
    LIST_OF_FIRST_NAMES[gender][getRandomIndex(LIST_OF_FIRST_NAMES[gender])];
  const lastName = LIST_OF_LAST_NAMES[getRandomIndex(LIST_OF_LAST_NAMES)];

  if (firstNameOnly) {
    return firstName;
  }

  if (lastNameOnly) {
    return lastName;
  }

  return `${firstName} ${lastName}`;
};

export default {
  name: (type, gender, salutation) => gimmeName(type, gender, salutation)
};
