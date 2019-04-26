import GimmeError from 'gimmejs-error';

export const typeValidator = (data, type) => {
  if (typeof data !== type) {
    throw new GimmeError(`Type Error! Argument must be a ${type}. You entered ${data} which is a ${typeof data}.`);
  }
}