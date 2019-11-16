import GimmeError from '../models/GimmeError';

/**
 * Throws a missing parameter error.
 * Assign as the default value to a parameter that
 * should be required.
 * @return {GimmeError}
 */
export const required = param => {
  throw new GimmeError(
    'Missing Parameter',
    `The "${param}" parameter is required.`
  );
};
