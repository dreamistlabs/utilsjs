import GimmeError from '../models/GimmeError';

export const typeValidator = (data, type) => {
  const dataTypes = ['undefined', 'boolean', 'string', 'number', 'object'];

  if (!dataTypes.includes(type))
    throw new GimmeError(
      `Type Error! Invalid data type argument: ${type}. Acceptable types are: ${dataTypes
        .map(type => type)
        .join(', ')}.`
    );

  if (typeof data !== type) {
    throw new GimmeError(
      `Type Error! Argument must be a ${type}. You entered ${data} which is a ${typeof data}.`
    );
  }
};
