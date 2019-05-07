import GimmeError from '../models/error';

/**
 * @param {array} argsArray -
 * @param {array} schemaArray -
 * @return
 */
export const handleTypeErrors = (argsArray = null, schemaArray = null) => {
  if (argsArray === null || schemaArray === null) {
    // handle error
    return;
  }

  schemaArray.forEach((schemaArg, i) => {
    if (!schemaArg.type.includes(typeof argsArray[i])) {
      const dynamicMessage =
        schemaArg.type.length > 1
          ? `Argument must be one of the following: ${schemaArg.type}`
          : `Argument must be a ${schemaArg.type}`;

      throw new GimmeError(
        `Type Error! ${dynamicMessage}. You entered "${
          argsArray[i]
        }" which is a ${typeof argsArray[i]}.`
      );
    }
  });

  return;
};
