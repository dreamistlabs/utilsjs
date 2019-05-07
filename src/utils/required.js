import GimmeError from '../models/Error';

/**
 * Throws a missing parameter error.
 * Assign as the default value to a parameter that
 * should be required.
 * @return {GimmeError}
 */
export const required = () => {
  throw new GimmeError(
    'Missing Parameter! You likely forgot to include a required parameter.'
  );
};
